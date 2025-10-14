import { Schema, model, Document } from "mongoose";

export interface IHistory extends Document {
  playerId: Schema.Types.ObjectId;
  matchId: Schema.Types.ObjectId;
  minutesPlayed: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  rating: number;
  createdAt?: Date;
}

const HistorySchema = new Schema<IHistory>({
  playerId: { type: Schema.Types.ObjectId, ref: "Player", required: true },
  matchId: { type: Schema.Types.ObjectId, ref: "Match", required: true },
  minutesPlayed: { type: Number, default: 0 },
  goals: { type: Number, default: 0 },
  assists: { type: Number, default: 0 },
  yellowCards: { type: Number, default: 0 },
  redCards: { type: Number, default: 0 },
  rating: { type: Number, default: 0 }, // calificación del jugador en el partido
  createdAt: { type: Date, default: Date.now },
});

export default model<IHistory>("History", HistorySchema);
