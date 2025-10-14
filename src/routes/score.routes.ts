import { Router } from "express";
import { createScore, getScores } from "../controllers/score.controller";

const router = Router();

router.post("/", createScore);
router.get("/", getScores);

export default router;
