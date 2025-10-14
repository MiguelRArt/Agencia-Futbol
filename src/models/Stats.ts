import { Schema, model, Document } from "mongoose";

export interface IStat extends Document {
  matchId: Schema.Types.ObjectId;
  teamId: Schema.Types.ObjectId;
  possession: number;
  shots: number;
  passes: number;
  fouls: number;
  corners: number;
  offsides: number;
  createdAt?: Date;
}

const StatSchema = new Schema<IStat>({
  matchId: { type: Schema.Types.ObjectId, ref: "Match", required: true },
  teamId: { type: Schema.Types.ObjectId, ref: "Team", required: true },
  possession: { type: Number, default: 0 },
  shots: { type: Number, default: 0 },
  passes: { type: Number, default: 0 },
  fouls: { type: Number, default: 0 },
  corners: { type: Number, default: 0 },
  offsides: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default model<IStat>("Stat", StatSchema);
