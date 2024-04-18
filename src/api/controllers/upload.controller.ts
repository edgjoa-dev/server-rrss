import { Request, Response } from 'express';
import { uploadFile } from '../../utils';

// Importa el array de extensiones válidas desde el archivo uploadFile.utils.ts

export const uploadImage = async (req: Request, res: Response) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        return res.status(400).send('No files were uploaded.');
    }

    try {
        const pathComplete = await uploadFile(req.files);
        console.log("🚀 ~ uploadImage ~ pathComplete:", req.files)

        res.json({
            path: pathComplete,
        });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).send('Error uploading file.');
    }

};
