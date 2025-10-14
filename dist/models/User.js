"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "agent", "viewer"], default: "viewer" }
});
// Hash automático del password antes de guardar
UserSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password"))
        return next();
    const salt = await bcryptjs_1.default.genSalt(10);
    user.password = await bcryptjs_1.default.hash(user.password, salt);
    next();
});
UserSchema.methods.comparePassword = async function (password) {
    return bcryptjs_1.default.compare(password, this.password);
};
exports.default = (0, mongoose_1.model)("User", UserSchema);
