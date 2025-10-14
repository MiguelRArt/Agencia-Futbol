"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLeague = exports.updateLeague = exports.createLeague = exports.getLeagueById = exports.getLeagues = void 0;
const League_1 = __importDefault(require("../models/League"));
// Obtener todas las ligas
const getLeagues = async (req, res) => {
    try {
        const leagues = await League_1.default.find();
        res.json(leagues);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener ligas", error });
    }
};
exports.getLeagues = getLeagues;
// Obtener liga por ID
const getLeagueById = async (req, res) => {
    try {
        const league = await League_1.default.findById(req.params.id);
        if (!league)
            return res.status(404).json({ message: "Liga no encontrada" });
        res.json(league);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener la liga", error });
    }
};
exports.getLeagueById = getLeagueById;
// Crear liga
const createLeague = async (req, res) => {
    try {
        const league = new League_1.default(req.body);
        await league.save();
        res.status(201).json(league);
    }
    catch (error) {
        res.status(400).json({ message: "Error al crear la liga", error });
    }
};
exports.createLeague = createLeague;
// Actualizar liga
const updateLeague = async (req, res) => {
    try {
        const league = await League_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(league);
    }
    catch (error) {
        res.status(400).json({ message: "Error al actualizar la liga", error });
    }
};
exports.updateLeague = updateLeague;
// Eliminar liga
const deleteLeague = async (req, res) => {
    try {
        await League_1.default.findByIdAndDelete(req.params.id);
        res.json({ message: "Liga eliminada" });
    }
    catch (error) {
        res.status(400).json({ message: "Error al eliminar la liga", error });
    }
};
exports.deleteLeague = deleteLeague;
