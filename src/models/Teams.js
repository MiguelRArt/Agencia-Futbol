"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const teamSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    founded: { type: Number, required: true },
    stadium: { type: String },
    league: { type: mongoose_1.Types.ObjectId, ref: "League", required: true },
    coach: { type: String },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Team", teamSchema);
//# sourceMappingURL=Teams.js.map