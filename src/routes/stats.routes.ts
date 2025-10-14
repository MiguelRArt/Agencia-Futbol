import { Router } from "express";
import { createStat, getStats, getStatsByMatch } from "../controllers/stats.controller";

const router = Router();

router.post("/", createStat);
router.get("/", getStats);
router.get("/match/:matchId", getStatsByMatch);

export default router;
