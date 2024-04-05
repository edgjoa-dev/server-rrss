import { Request, Response } from "express";
import User from "../../aplication/models/user.model";
import bcryptjs from 'bcrypt';
import { jwtGeneration } from "../utils";

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        // Comprobar que exista el usuario
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({
                ok: false,
                msg: 'El usuario no existe'
            });
            return;
        }

        // Validar si usuario está activo
        if (!user.state) {
            res.status(400).json({
                ok: false,
                msg: 'El usuario no está activo'
            });
            return;
        }

        // Comprobar si la contraseña es correcta
        const validPassword: boolean = bcryptjs.compareSync(password, user.password);
        if (!validPassword) {
            res.status(400).json({
                ok: false,
                msg: 'Usuario / Contraseña incorrectos'
            });
            return;
        }

        // Obtener el ID del usuario como cadena
        const uid: string = user._id.toString();
        console.log("usuario:", user);
        console.log("UID del usuario:", uid);

        // Generar JWT con el UID del usuario
        const token: string = await jwtGeneration(uid);

        res.status(200).json({
            msg: 'Inicio de sesión correcto',
            user,
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al generar JWT, hable con el administrador.'
        });
    }
};
