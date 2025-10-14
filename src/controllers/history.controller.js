"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHistoryByMatch = exports.getHistoryByPlayer = exports.getHistories = exports.createHistory = void 0;
const express_1 = require("express");
const History_1 = __importDefault(require("../models/History"));
// Crear registro histórico
const createHistory = async (req, res) => {
    try {
        const history = await History_1.default.create(req.body);
        res.status(201).json(history);
    }
    catch (error) {
        res.status(500).json({ message: "Error creando histórico", error });
    }
};
exports.createHistory = createHistory;
// Obtener todos los históricos
const getHistories = async (req, res) => {
    try {
        const histories = await History_1.default.find().populate("playerId matchId");
        res.json(histories);
    }
    catch (error) {
        res.status(500).json({ message: "Error obteniendo históricos", error });
    }
};
exports.getHistories = getHistories;
// Obtener histórico por jugador
const getHistoryByPlayer = async (req, res) => {
    try {
        const histories = await History_1.default.find({ playerId: req.params.playerId }).populate("matchId");
        res.json(histories);
    }
    catch (error) {
        res.status(500).json({ message: "Error obteniendo histórico del jugador", error });
    }
};
exports.getHistoryByPlayer = getHistoryByPlayer;
// Obtener histórico por partido
const getHistoryByMatch = async (req, res) => {
    try {
        const histories = await History_1.default.find({ matchId: req.params.matchId }).populate("playerId");
        res.json(histories);
    }
    catch (error) {
        res.status(500).json({ message: "Error obteniendo histórico del partido", error });
    }
};
exports.getHistoryByMatch = getHistoryByMatch;
//# sourceMappingURL=history.controller.js.map