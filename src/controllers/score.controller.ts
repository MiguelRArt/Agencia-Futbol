import { Request, Response } from "express";
import Score from "../models/Scores";

export const createScore = async (req: Request, res: Response) => {
  try {
    const score = await Score.create(req.body);
    res.status(201).json(score);
  } catch (error) {
    res.status(500).json({ message: "Error creando puntuación", error });
  }
};

export const getScores = async (req: Request, res: Response) => {
  try {
    const scores = await Score.find().populate("matchId teamId");
    res.json(scores);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo puntuaciones", error });
  }
};
