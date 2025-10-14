import { Schema, Document } from "mongoose";
export interface IScore extends Document {
    matchId: Schema.Types.ObjectId;
    teamId: Schema.Types.ObjectId;
    goals: number;
    createdAt?: Date;
}
declare const _default: import("mongoose").Model<IScore, {}, {}, {}, Document<unknown, {}, IScore, {}, {}> & IScore & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=Scores.d.ts.map