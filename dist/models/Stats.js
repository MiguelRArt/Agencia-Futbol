"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const StatSchema = new mongoose_1.Schema({
    matchId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Match", required: true },
    teamId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Team", required: true },
    possession: { type: Number, default: 0 },
    shots: { type: Number, default: 0 },
    passes: { type: Number, default: 0 },
    fouls: { type: Number, default: 0 },
    corners: { type: Number, default: 0 },
    offsides: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)("Stat", StatSchema);
//# sourceMappingURL=Stats.js.map