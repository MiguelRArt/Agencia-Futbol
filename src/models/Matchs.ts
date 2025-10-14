import { Schema, model, Types } from "mongoose";

const matchSchema = new Schema(
  {
    homeTeam: { type: Types.ObjectId, ref: "Team", required: true },
    awayTeam: { type: Types.ObjectId, ref: "Team", required: true },
    league: { type: Types.ObjectId, ref: "League", required: true },
    date: { type: Date, required: true },
    stadium: { type: String },
    scoreHome: { type: Number, default: 0 },
    scoreAway: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["scheduled", "in_progress", "finished"],
      default: "scheduled",
    },
  },
  { timestamps: true }
);

export default model("Match", matchSchema);
