import { Schema, model, Document } from "mongoose";

export interface IScore extends Document {
  matchId: Schema.Types.ObjectId;
  teamId: Schema.Types.ObjectId;
  goals: number;
  createdAt?: Date;
}

const ScoreSchema = new Schema<IScore>({
  matchId: { type: Schema.Types.ObjectId, ref: "Match", required: true },
  teamId: { type: Schema.Types.ObjectId, ref: "Team", required: true },
  goals: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model<IScore>("Score", ScoreSchema);
