"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScores = exports.createScore = void 0;
const Scores_1 = __importDefault(require("../models/Scores"));
const createScore = async (req, res) => {
    try {
        const score = await Scores_1.default.create(req.body);
        res.status(201).json(score);
    }
    catch (error) {
        res.status(500).json({ message: "Error creando puntuación", error });
    }
};
exports.createScore = createScore;
const getScores = async (req, res) => {
    try {
        const scores = await Scores_1.default.find().populate("matchId teamId");
        res.json(scores);
    }
    catch (error) {
        res.status(500).json({ message: "Error obteniendo puntuaciones", error });
    }
};
exports.getScores = getScores;
