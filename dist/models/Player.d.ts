import { Schema, Document } from "mongoose";
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
declare const _default: import("mongoose").Model<IPlayer, {}, {}, {}, Document<unknown, {}, IPlayer, {}, {}> & IPlayer & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=Player.d.ts.map