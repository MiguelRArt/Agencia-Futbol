import { Schema, model, Document } from "mongoose";

export interface IPlayer extends Document {
  name: string;
  age: number;
  position: string;
  nationality: string;
  teamId: Schema.Types.ObjectId;
  goals?: number;
  assists?: number;
  yellowCards?: number;
  redCards?: number;
  createdAt?: Date;
}

const PlayerSchema = new Schema<IPlayer>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  position: { type: String, required: true },
  nationality: { type: String, required: true },
  teamId: { type: Schema.Types.ObjectId, ref: "Team", required: true },
  goals: { type: Number, default: 0 },
  assists: { type: Number, default: 0 },
  yellowCards: { type: Number, default: 0 },
  redCards: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default model<IPlayer>("Player", PlayerSchema);
