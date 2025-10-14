"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
const league_routes_1 = __importDefault(require("./routes/league.routes"));
const team_routes_1 = __importDefault(require("./routes/team.routes"));
const match_routes_1 = __importDefault(require("./routes/match.routes"));
const score_routes_1 = __importDefault(require("./routes/score.routes"));
const player_routes_1 = __importDefault(require("./routes/player.routes"));
const stats_routes_1 = __importDefault(require("./routes/stats.routes"));
const history_routes_1 = __importDefault(require("./routes/history.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
// puedes importar más rutas aquí: userRoutes, matchRoutes, etc.
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Conexión a MongoDB
(0, database_1.connectDB)();
// Rutas
app.use("/api/leagues", league_routes_1.default);
app.use("/api/teams", team_routes_1.default);
app.use("/api/matches", match_routes_1.default);
app.use("/api/scores", score_routes_1.default);
app.use("/api/players", player_routes_1.default);
app.use("/api/stats", stats_routes_1.default);
app.use("/api/history", history_routes_1.default);
app.use("/api/users", user_routes_1.default);
// Ruta base
app.get("/", (req, res) => {
    res.send("🚀 API de Agencia de Fútbol corriendo correctamente");
});
// Iniciar servidor
app.listen(PORT, () => {
    console.log(`⚽ Servidor corriendo en puerto ${PORT}`);
});
