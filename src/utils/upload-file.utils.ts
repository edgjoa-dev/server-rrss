import { v4 as uuidv4 } from 'uuid';
uuidv4();
import path from 'path';
//import { IUploadedFile } from '../aplication/utils/IUpload.util';

export const uploadFile = ( files: any , validExtensions = ['jpg', 'jpeg', 'png', 'gif'], folder='') => {

    return new Promise((resolve, reject) => {

        const file = files.file;
        const trunkNameFile = file.name.split('.');
        const extension = trunkNameFile[trunkNameFile.length - 1];

        //*Validar extensiones de archivo - permitir solo imagenes
        if (!validExtensions.includes(extension)) {
            return reject(`Las extensiones permitidas son ${validExtensions.join(', ')}`)
        }

        const nameTemp = uuidv4() + '.' + extension;
        const uploadPath = path.join(__dirname, '../uploads', folder, nameTemp);

        file.mv(uploadPath, function (err: Error) {
            if (err)
                return reject(err);

            resolve(uploadPath);
        });
    })
}

