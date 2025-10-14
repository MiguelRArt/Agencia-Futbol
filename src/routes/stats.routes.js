"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stats_controller_1 = require("../controllers/stats.controller");
const router = (0, express_1.Router)();
router.post("/", stats_controller_1.createStat);
router.get("/", stats_controller_1.getStats);
router.get("/match/:matchId", stats_controller_1.getStatsByMatch);
exports.default = router;
//# sourceMappingURL=stats.routes.js.map