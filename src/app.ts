// @ts-ignore
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database";
import leagueRoutes from "./routes/league.routes";
import teamRoutes from "./routes/team.routes";
import matchRoutes from "./routes/match.routes";
import scoreRoutes from "./routes/score.routes";
import playerRoutes from "./routes/player.routes";
import statRoutes from "./routes/stats.routes";
import historyRoutes from "./routes/history.routes";
import userRoutes from "./routes/user.routes";
// puedes importar más rutas aquí: userRoutes, matchRoutes, etc.

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Rutas
app.use("/api/leagues", leagueRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/scores", scoreRoutes);
app.use("/api/players", playerRoutes);
app.use("/api/stats", statRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/users", userRoutes);

// Ruta base
app.get("/", (req, res) => {
  res.send("🚀 API de Agencia de Fútbol corriendo correctamente");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`⚽ Servidor corriendo en puerto ${PORT}`);
});

