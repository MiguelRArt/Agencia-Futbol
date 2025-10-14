import { Request, Response } from "express";
import Match from "../models/Matchs";

// Obtener todos los partidos
export const getMatches = async (req: Request, res: Response) => {
  try {
    const matches = await Match.find()
      .populate("homeTeam", "name city")
      .populate("awayTeam", "name city")
      .populate("league", "name country");
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener partidos", error });
  }
};

// Obtener partido por ID
export const getMatchById = async (req: Request, res: Response) => {
  try {
    const match = await Match.findById(req.params.id)
      .populate("homeTeam", "name")
      .populate("awayTeam", "name")
      .populate("league", "name country");

    if (!match) return res.status(404).json({ message: "Partido no encontrado" });
    res.json(match);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el partido", error });
  }
};

// Crear partido
export const createMatch = async (req: Request, res: Response) => {
  try {
    const match = new Match(req.body);
    await match.save();
    res.status(201).json(match);
  } catch (error) {
    res.status(400).json({ message: "Error al crear el partido", error });
  }
};

// Actualizar partido
export const updateMatch = async (req: Request, res: Response) => {
  try {
    const match = await Match.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!match) return res.status(404).json({ message: "Partido no encontrado" });
    res.json(match);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el partido", error });
  }
};

// Eliminar partido
export const deleteMatch = async (req: Request, res: Response) => {
  try {
    const match = await Match.findByIdAndDelete(req.params.id);
    if (!match) return res.status(404).json({ message: "Partido no encontrado" });
    res.json({ message: "Partido eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar el partido", error });
  }
};
