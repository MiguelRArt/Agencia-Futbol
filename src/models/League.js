"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const leagueSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    season: { type: String, required: true },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("League", leagueSchema);
//# sourceMappingURL=League.js.map