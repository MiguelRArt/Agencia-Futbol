"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ScoreSchema = new mongoose_1.Schema({
    matchId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Match", required: true },
    teamId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Team", required: true },
    goals: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)("Score", ScoreSchema);
//# sourceMappingURL=Scores.js.map