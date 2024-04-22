import { NextFunction, Request, Response } from 'express';

export const validateFileUpload = ( req: Request, res: Response, next: NextFunction ) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        return res.status(400).send('No se encontro el archivo a subir, favor de válidar archivo e intentarlo nuevamente.');
    }

    next();
}
