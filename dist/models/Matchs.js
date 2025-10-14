"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const matchSchema = new mongoose_1.Schema({
    homeTeam: { type: mongoose_1.Types.ObjectId, ref: "Team", required: true },
    awayTeam: { type: mongoose_1.Types.ObjectId, ref: "Team", required: true },
    league: { type: mongoose_1.Types.ObjectId, ref: "League", required: true },
    date: { type: Date, required: true },
    stadium: { type: String },
    scoreHome: { type: Number, default: 0 },
    scoreAway: { type: Number, default: 0 },
    status: {
        type: String,
        enum: ["scheduled", "in_progress", "finished"],
        default: "scheduled",
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Match", matchSchema);
//# sourceMappingURL=Matchs.js.map