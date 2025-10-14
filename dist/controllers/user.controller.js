"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.loginUser = exports.registerUser = void 0;
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const jwt_1 = require("../utils/jwt");
// Registro de usuario
const registerUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const existing = await User_1.default.findOne({ email });
        if (existing)
            return res.status(400).json({ message: "El correo ya está registrado" });
        const user = await User_1.default.create({ username, email, password, role });
        res.status(201).json({
            message: "Usuario creado correctamente",
            user: { id: user._id, username: user.username, email: user.email, role: user.role }
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error registrando usuario", error });
    }
};
exports.registerUser = registerUser;
// Login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User_1.default.findOne({ email });
        if (!user)
            return res.status(404).json({ message: "Usuario no encontrado" });
        const isMatch = await user.comparePassword(password);
        if (!isMatch)
            return res.status(401).json({ message: "Contraseña incorrecta" });
        const token = (0, jwt_1.generateToken)(user._id.toString());
        res.json({
            message: "Inicio de sesión exitoso",
            user: { id: user._id, username: user.username, role: user.role },
            token
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error iniciando sesión", error });
    }
};
exports.loginUser = loginUser;
// Obtener todos los usuarios (solo admin)
const getUsers = async (req, res) => {
    try {
        const users = await User_1.default.find().select("-password");
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: "Error obteniendo usuarios", error });
    }
};
exports.getUsers = getUsers;
//# sourceMappingURL=user.controller.js.map