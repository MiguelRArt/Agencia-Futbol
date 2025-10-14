import { Request, Response } from "express";
import Player from "../models/Player";

// Crear jugador
export const createPlayer = async (req: Request, res: Response) => {
  try {
    const player = await Player.create(req.body);
    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({ message: "Error creando jugador", error });
  }
};

// Obtener todos los jugadores
export const getPlayers = async (req: Request, res: Response) => {
  try {
    const players = await Player.find().populate("teamId", "name");
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo jugadores", error });
  }
};

// Obtener un jugador por ID
export const getPlayerById = async (req: Request, res: Response) => {
  try {
    const player = await Player.findById(req.params.id).populate("teamId", "name");
    if (!player) return res.status(404).json({ message: "Jugador no encontrado" });
    res.json(player);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo jugador", error });
  }
};

// Actualizar jugador
export const updatePlayer = async (req: Request, res: Response) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!player) return res.status(404).json({ message: "Jugador no encontrado" });
    res.json(player);
  } catch (error) {
    res.status(500).json({ message: "Error actualizando jugador", error });
  }
};

// Eliminar jugador
export const deletePlayer = async (req: Request, res: Response) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);
    if (!player) return res.status(404).json({ message: "Jugador no encontrado" });
    res.json({ message: "Jugador eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error eliminando jugador", error });
  }
};
