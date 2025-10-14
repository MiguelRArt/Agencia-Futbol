"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeam = exports.updateTeam = exports.createTeam = exports.getTeamById = exports.getTeams = void 0;
const Teams_1 = __importDefault(require("../models/Teams"));
// Obtener todos los equipos
const getTeams = async (req, res) => {
    try {
        const teams = await Teams_1.default.find().populate("league", "name country");
        res.json(teams);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener equipos", error });
    }
};
exports.getTeams = getTeams;
// Obtener equipo por ID
const getTeamById = async (req, res) => {
    try {
        const team = await Teams_1.default.findById(req.params.id).populate("league", "name country");
        if (!team)
            return res.status(404).json({ message: "Equipo no encontrado" });
        res.json(team);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener el equipo", error });
    }
};
exports.getTeamById = getTeamById;
// Crear equipo
const createTeam = async (req, res) => {
    try {
        const team = new Teams_1.default(req.body);
        await team.save();
        res.status(201).json(team);
    }
    catch (error) {
        res.status(400).json({ message: "Error al crear el equipo", error });
    }
};
exports.createTeam = createTeam;
// Actualizar equipo
const updateTeam = async (req, res) => {
    try {
        const team = await Teams_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!team)
            return res.status(404).json({ message: "Equipo no encontrado" });
        res.json(team);
    }
    catch (error) {
        res.status(400).json({ message: "Error al actualizar el equipo", error });
    }
};
exports.updateTeam = updateTeam;
// Eliminar equipo
const deleteTeam = async (req, res) => {
    try {
        const team = await Teams_1.default.findByIdAndDelete(req.params.id);
        if (!team)
            return res.status(404).json({ message: "Equipo no encontrado" });
        res.json({ message: "Equipo eliminado correctamente" });
    }
    catch (error) {
        res.status(400).json({ message: "Error al eliminar el equipo", error });
    }
};
exports.deleteTeam = deleteTeam;
