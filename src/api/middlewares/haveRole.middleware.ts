import { NextFunction, request, response } from "express";


export const haveRole = ( ...roles: string[] ) => {

    return (req=request, res = response, next: NextFunction) => {
        if (!req.body.user) {
            return res.status(500).json({
                msg: "Se debe validar token de usuario primero",
            });
        }

        if (!roles.includes( req.body.user.role )) {
            return res.status(401).json({
                msg: `El usuario debe contar con uno de los siguientes roles: ${ roles }`,
            });
        }

        next();
    }
}