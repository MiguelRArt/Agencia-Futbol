import { Schema, model } from "mongoose";

const leagueSchema = new Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    season: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("League", leagueSchema);
