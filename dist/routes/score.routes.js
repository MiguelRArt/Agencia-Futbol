"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const score_controller_1 = require("../controllers/score.controller");
const router = (0, express_1.Router)();
router.post("/", score_controller_1.createScore);
router.get("/", score_controller_1.getScores);
exports.default = router;
