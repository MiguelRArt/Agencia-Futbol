import { Request, Response } from "express";
import Stat from "../models/Stats";

// Crear estadística
export const createStat = async (req: Request, res: Response) => {
  try {
    const stat = await Stat.create(req.body);
    res.status(201).json(stat);
  } catch (error) {
    res.status(500).json({ message: "Error creando estadística", error });
  }
};

// Obtener todas las estadísticas
export const getStats = async (req: Request, res: Response) => {
  try {
    const stats = await Stat.find().populate("matchId teamId");
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo estadísticas", error });
  }
};

// Obtener estadísticas por ID de partido
export const getStatsByMatch = async (req: Request, res: Response) => {
  try {
    const stats = await Stat.find({ matchId: req.params.matchId }).populate("teamId");
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo estadísticas del partido", error });
  }
};
