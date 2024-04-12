import { Request, Response } from 'express';
import path from 'path';
import { UploadedFile } from 'express-fileupload';


export const uploadImage = (req: Request, res: Response) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        return res.status(400).send('No files were uploaded.');
    }

    const file = Array.isArray(req.files.file) ? req.files.file[0] : req.files.file as UploadedFile;
    const trunkNameFile = file.name.split('.');
    const extension = trunkNameFile[trunkNameFile.length - 1];


    //*Validar extensiones de archivo - permitir solo imagenes
    const validExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    if (!validExtensions.includes(extension)) {
        return res.status(400).json({
            msg: `Las extensiones permitidas son ${validExtensions.join(', ')}`
        });
    }

    // const uploadPath = path.join(__dirname, '../../uploads', file.name);

    // file.mv(uploadPath, function (err: Error) {
    //     if (err)
    //         return res.status(500).json({err});

    //     res.status(200).json({ msg: 'File uploaded!' + uploadPath });
    // });
};