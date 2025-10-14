import { Router } from "express";
import { registerUser, loginUser, getUsers } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", authMiddleware, getUsers);

export default router;
