"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PlayerSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    position: { type: String, required: true },
    nationality: { type: String, required: true },
    teamId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Team", required: true },
    goals: { type: Number, default: 0 },
    assists: { type: Number, default: 0 },
    yellowCards: { type: Number, default: 0 },
    redCards: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)("Player", PlayerSchema);
