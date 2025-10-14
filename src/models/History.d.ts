import { Schema, Document } from "mongoose";
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
declare const _default: import("mongoose").Model<IHistory, {}, {}, {}, Document<unknown, {}, IHistory, {}, {}> & IHistory & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=History.d.ts.map