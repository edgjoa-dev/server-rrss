import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { FileArray, UploadedFile } from 'express-fileupload';

export const uploadFile = (
    files: FileArray | null | undefined,
    validExtensions = ['jpg', 'jpeg', 'png', 'gif'],
    folder = ''
): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (!files || !files.file) {
            return reject(new Error('No se subió ningún archivo.'));
        }

        const file: UploadedFile = Array.isArray(files.file) ? files.file[0] : files.file;

        if (!file.name) {
            return reject(new Error('El archivo no tiene nombre.'));
        }

        const trunkNameFile = file.name.split('.');
        const extension = trunkNameFile[trunkNameFile.length - 1];

        if (!validExtensions.includes(extension)) {
            return reject(`Las extensiones permitidas son ${validExtensions.join(', ')}`);
        }

        const nameTemp = uuidv4() + '.' + extension;
        const uploadPath = path.join(__dirname, '../uploads', folder, nameTemp);

        file.mv(uploadPath, (err: Error) => {
            if (err) {
                return reject(err);
            }

            resolve(uploadPath);
        });
    });
};
