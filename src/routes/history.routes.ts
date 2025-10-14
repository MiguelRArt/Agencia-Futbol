import { Router } from "express";
import {
  createHistory,
  getHistories,
  getHistoryByPlayer,
  getHistoryByMatch
} from "../controllers/history.controller";

const router = Router();

router.post("/", createHistory);
router.get("/", getHistories);
router.get("/player/:playerId", getHistoryByPlayer);
router.get("/match/:matchId", getHistoryByMatch);

export default router;
