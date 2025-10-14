"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const history_controller_1 = require("../controllers/history.controller");
const router = (0, express_1.Router)();
router.post("/", history_controller_1.createHistory);
router.get("/", history_controller_1.getHistories);
router.get("/player/:playerId", history_controller_1.getHistoryByPlayer);
router.get("/match/:matchId", history_controller_1.getHistoryByMatch);
exports.default = router;
//# sourceMappingURL=history.routes.js.map