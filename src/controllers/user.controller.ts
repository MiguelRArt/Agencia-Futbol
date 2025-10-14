import { Request, Response } from "express";
import User from "../models/User";
import { generateToken } from "../utils/jwt";

// Registro de usuario
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password, role } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "El correo ya está registrado" });

    const user = await User.create({ username, email, password, role });
    res.status(201).json({
      message: "Usuario creado correctamente",
      user: { id: user._id, username: user.username, email: user.email, role: user.role }
    });
  } catch (error) {
    res.status(500).json({ message: "Error registrando usuario", error });
  }
};

// Login
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: "Contraseña incorrecta" });

    const token = generateToken(user._id.toString());

    res.json({
      message: "Inicio de sesión exitoso",
      user: { id: user._id, username: user.username, role: user.role },
      token
    });
  } catch (error) {
    res.status(500).json({ message: "Error iniciando sesión", error });
  }
};

// Obtener todos los usuarios (solo admin)
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo usuarios", error });
  }
};
