"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlayer = exports.updatePlayer = exports.getPlayerById = exports.getPlayers = exports.createPlayer = void 0;
const express_1 = require("express");
const Player_1 = __importDefault(require("../models/Player"));
// Crear jugador
const createPlayer = async (req, res) => {
    try {
        const player = await Player_1.default.create(req.body);
        res.status(201).json(player);
    }
    catch (error) {
        res.status(500).json({ message: "Error creando jugador", error });
    }
};
exports.createPlayer = createPlayer;
// Obtener todos los jugadores
const getPlayers = async (req, res) => {
    try {
        const players = await Player_1.default.find().populate("teamId", "name");
        res.json(players);
    }
    catch (error) {
        res.status(500).json({ message: "Error obteniendo jugadores", error });
    }
};
exports.getPlayers = getPlayers;
// Obtener un jugador por ID
const getPlayerById = async (req, res) => {
    try {
        const player = await Player_1.default.findById(req.params.id).populate("teamId", "name");
        if (!player)
            return res.status(404).json({ message: "Jugador no encontrado" });
        res.json(player);
    }
    catch (error) {
        res.status(500).json({ message: "Error obteniendo jugador", error });
    }
};
exports.getPlayerById = getPlayerById;
// Actualizar jugador
const updatePlayer = async (req, res) => {
    try {
        const player = await Player_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!player)
            return res.status(404).json({ message: "Jugador no encontrado" });
        res.json(player);
    }
    catch (error) {
        res.status(500).json({ message: "Error actualizando jugador", error });
    }
};
exports.updatePlayer = updatePlayer;
// Eliminar jugador
const deletePlayer = async (req, res) => {
    try {
        const player = await Player_1.default.findByIdAndDelete(req.params.id);
        if (!player)
            return res.status(404).json({ message: "Jugador no encontrado" });
        res.json({ message: "Jugador eliminado correctamente" });
    }
    catch (error) {
        res.status(500).json({ message: "Error eliminando jugador", error });
    }
};
exports.deletePlayer = deletePlayer;
//# sourceMappingURL=player.controller.js.map