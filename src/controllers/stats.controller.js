"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatsByMatch = exports.getStats = exports.createStat = void 0;
const express_1 = require("express");
const Stats_1 = __importDefault(require("../models/Stats"));
// Crear estadística
const createStat = async (req, res) => {
    try {
        const stat = await Stats_1.default.create(req.body);
        res.status(201).json(stat);
    }
    catch (error) {
        res.status(500).json({ message: "Error creando estadística", error });
    }
};
exports.createStat = createStat;
// Obtener todas las estadísticas
const getStats = async (req, res) => {
    try {
        const stats = await Stats_1.default.find().populate("matchId teamId");
        res.json(stats);
    }
    catch (error) {
        res.status(500).json({ message: "Error obteniendo estadísticas", error });
    }
};
exports.getStats = getStats;
// Obtener estadísticas por ID de partido
const getStatsByMatch = async (req, res) => {
    try {
        const stats = await Stats_1.default.find({ matchId: req.params.matchId }).populate("teamId");
        res.json(stats);
    }
    catch (error) {
        res.status(500).json({ message: "Error obteniendo estadísticas del partido", error });
    }
};
exports.getStatsByMatch = getStatsByMatch;
//# sourceMappingURL=stats.controller.js.map