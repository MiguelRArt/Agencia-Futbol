import { Request, Response } from "express";
import League from "../models/League";

// Obtener todas las ligas
export const getLeagues = async (req: Request, res: Response) => {
  try {
    const leagues = await League.find();
    res.json(leagues);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener ligas", error });
  }
};

// Obtener liga por ID
export const getLeagueById = async (req: Request, res: Response) => {
  try {
    const league = await League.findById(req.params.id);
    if (!league) return res.status(404).json({ message: "Liga no encontrada" });
    res.json(league);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la liga", error });
  }
};

// Crear liga
export const createLeague = async (req: Request, res: Response) => {
  try {
    const league = new League(req.body);
    await league.save();
    res.status(201).json(league);
  } catch (error) {
    res.status(400).json({ message: "Error al crear la liga", error });
  }
};

// Actualizar liga
export const updateLeague = async (req: Request, res: Response) => {
  try {
    const league = await League.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(league);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar la liga", error });
  }
};

// Eliminar liga
export const deleteLeague = async (req: Request, res: Response) => {
  try {
    await League.findByIdAndDelete(req.params.id);
    res.json({ message: "Liga eliminada" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar la liga", error });
  }
};
