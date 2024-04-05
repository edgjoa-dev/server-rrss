import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../../aplication/models/user.model";


export const validarJWT = async(req:Request, res:Response, next:NextFunction) => {

const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            msg: 'No hay token'
        });
    }

    try {

        const { uid } = jwt.verify(token, process.env.JWT_SECRET as string)as any;


        const user = await User.findById(uid);

        if(!user){
            return res.status(401).json({
                msg: 'Token no valido - usuario no existe'
            });
        }
        if(!user.state){
            return res.status(401).json({
                msg: 'Token no valido - usuario con estado false'
            });
        }

        req.body.user = user;

        next();

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al validar el token'
        });
    }
}