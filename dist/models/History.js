"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const HistorySchema = new mongoose_1.Schema({
    playerId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Player", required: true },
    matchId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Match", required: true },
    minutesPlayed: { type: Number, default: 0 },
    goals: { type: Number, default: 0 },
    assists: { type: Number, default: 0 },
    yellowCards: { type: Number, default: 0 },
    redCards: { type: Number, default: 0 },
    rating: { type: Number, default: 0 }, // calificación del jugador en el partido
    createdAt: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)("History", HistorySchema);
//# sourceMappingURL=History.js.map