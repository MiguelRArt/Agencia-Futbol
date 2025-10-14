"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMatch = exports.updateMatch = exports.createMatch = exports.getMatchById = exports.getMatches = void 0;
const express_1 = require("express");
const Matchs_1 = __importDefault(require("../models/Matchs"));
// Obtener todos los partidos
const getMatches = async (req, res) => {
    try {
        const matches = await Matchs_1.default.find()
            .populate("homeTeam", "name city")
            .populate("awayTeam", "name city")
            .populate("league", "name country");
        res.json(matches);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener partidos", error });
    }
};
exports.getMatches = getMatches;
// Obtener partido por ID
const getMatchById = async (req, res) => {
    try {
        const match = await Matchs_1.default.findById(req.params.id)
            .populate("homeTeam", "name")
            .populate("awayTeam", "name")
            .populate("league", "name country");
        if (!match)
            return res.status(404).json({ message: "Partido no encontrado" });
        res.json(match);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener el partido", error });
    }
};
exports.getMatchById = getMatchById;
// Crear partido
const createMatch = async (req, res) => {
    try {
        const match = new Matchs_1.default(req.body);
        await match.save();
        res.status(201).json(match);
    }
    catch (error) {
        res.status(400).json({ message: "Error al crear el partido", error });
    }
};
exports.createMatch = createMatch;
// Actualizar partido
const updateMatch = async (req, res) => {
    try {
        const match = await Matchs_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!match)
            return res.status(404).json({ message: "Partido no encontrado" });
        res.json(match);
    }
    catch (error) {
        res.status(400).json({ message: "Error al actualizar el partido", error });
    }
};
exports.updateMatch = updateMatch;
// Eliminar partido
const deleteMatch = async (req, res) => {
    try {
        const match = await Matchs_1.default.findByIdAndDelete(req.params.id);
        if (!match)
            return res.status(404).json({ message: "Partido no encontrado" });
        res.json({ message: "Partido eliminado correctamente" });
    }
    catch (error) {
        res.status(400).json({ message: "Error al eliminar el partido", error });
    }
};
exports.deleteMatch = deleteMatch;
//# sourceMappingURL=match.controller.js.map