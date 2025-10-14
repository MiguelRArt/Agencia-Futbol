import { Schema, model, Types } from "mongoose";

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    founded: { type: Number, required: true },
    stadium: { type: String },
    league: { type: Types.ObjectId, ref: "League", required: true },
    coach: { type: String },
  },
  { timestamps: true }
);

export default model("Team", teamSchema);
