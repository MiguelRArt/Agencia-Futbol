import { Router } from "express";
import {
  getLeagues,
  getLeagueById,
  createLeague,
  updateLeague,
  deleteLeague,
} from "../controllers/league.controller";

const router = Router();

router.get("/", getLeagues);
router.get("/:id", getLeagueById);
router.post("/", createLeague);
router.put("/:id", updateLeague);
router.delete("/:id", deleteLeague);

export default router;
