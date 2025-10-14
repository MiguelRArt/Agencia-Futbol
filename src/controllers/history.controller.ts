import { Request, Response } from "express";
import History from "../models/History";

// Crear registro histórico
export const createHistory = async (req: Request, res: Response) => {
  try {
    const history = await History.create(req.body);
    res.status(201).json(history);
  } catch (error) {
    res.status(500).json({ message: "Error creando histórico", error });
  }
};

// Obtener todos los históricos
export const getHistories = async (req: Request, res: Response) => {
  try {
    const histories = await History.find().populate("playerId matchId");
    res.json(histories);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo históricos", error });
  }
};

// Obtener histórico por jugador
export const getHistoryByPlayer = async (req: Request, res: Response) => {
  try {
    const histories = await History.find({ playerId: req.params.playerId }).populate("matchId");
    res.json(histories);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo histórico del jugador", error });
  }
};

// Obtener histórico por partido
export const getHistoryByMatch = async (req: Request, res: Response) => {
  try {
    const histories = await History.find({ matchId: req.params.matchId }).populate("playerId");
    res.json(histories);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo histórico del partido", error });
  }
};
