import { Request, Response } from "express"
import { IUser } from "../../utils";
import User from "../../aplication/models/user.model";
import bcryptjs from 'bcrypt';
import { jwtGeneration } from "../utils";


export const login = async( req:Request, res:Response ):Promise<void>=> {

    const { email, password } = req.body;

    try {
        //*Comprobar que exista el usuario
        const user:IUser | null = await User.findOne({ email })
        if(!user){
            res.status(400).json({
                ok: false,
                msg: 'El usuario no existe'
            })
            return;
        }

        //*Validar si usuario esta activo
        if(!user.state){
            res.status(400).json({
                ok: false,
                msg: 'El usuario no esta activo'
            })
            return;
        }

        //*Comprobar si password es correcto
        const validPassword: boolean = bcryptjs.compareSync(password, user.password);
        if(!validPassword){
            res.status(400).json({
                ok: false,
                msg: 'Usuario / Password incorrecto'
            })
            return;
        }

        //*Generar JWT
        const token: string = await jwtGeneration(user.uid)

        res.status(200).json({
            msg: 'Login correcto',
            user,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al generar jwt, hable con el administrador.'
        })
    }

}