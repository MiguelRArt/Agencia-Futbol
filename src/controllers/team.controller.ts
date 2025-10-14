import { Request, Response } from "express";
import Team from "../models/Teams";

// Obtener todos los equipos
export const getTeams = async (req: Request, res: Response) => {
  try {
    const teams = await Team.find().populate("league", "name country");
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener equipos", error });
  }
};

// Obtener equipo por ID
export const getTeamById = async (req: Request, res: Response) => {
  try {
    const team = await Team.findById(req.params.id).populate("league", "name country");
    if (!team) return res.status(404).json({ message: "Equipo no encontrado" });
    res.json(team);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el equipo", error });
  }
};

// Crear equipo
export const createTeam = async (req: Request, res: Response) => {
  try {
    const team = new Team(req.body);
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    res.status(400).json({ message: "Error al crear el equipo", error });
  }
};

// Actualizar equipo
export const updateTeam = async (req: Request, res: Response) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!team) return res.status(404).json({ message: "Equipo no encontrado" });
    res.json(team);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el equipo", error });
  }
};

// Eliminar equipo
export const deleteTeam = async (req: Request, res: Response) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);
    if (!team) return res.status(404).json({ message: "Equipo no encontrado" });
    res.json({ message: "Equipo eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar el equipo", error });
  }
};
