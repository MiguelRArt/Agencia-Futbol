import { Schema, Document } from "mongoose";
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
declare const _default: import("mongoose").Model<IStat, {}, {}, {}, Document<unknown, {}, IStat, {}, {}> & IStat & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=Stats.d.ts.map