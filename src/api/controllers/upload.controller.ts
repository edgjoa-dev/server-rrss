import { Request, Response } from 'express';
import { uploadFile } from '../../utils';
import User from '../../aplication/models/user.model';
import Post from '../../aplication/models/post.model';

export const uploadImage = async (req: Request, res: Response) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        return res.status(400).send('No files were uploaded.');
    }

    try {
        const pathComplete = await uploadFile(req.files,undefined, 'imgs');
        return res.json({
            path: pathComplete,
        });
    } catch (error) {
        console.error('Error uploading file:', error);
        return res.status(500).send('Error uploading file.');
    }

};

export const updateImage = async( req: Request, res: Response )=> {

    const {id, colection} = req.params;

    let model;

    switch ( colection ){
        case 'users':
            model = await User.findById(id);
            if (!model) {
                return res.status(400).json({
                    msg: `No existe un Usuario con el id ${id}`
                })
            }
            break;

        case 'posts':
            model = await Post.findById(id);
            if (!model) {
                return res.status(400).json({
                    msg: `No existe un Post con el id ${id}`
                })
            }
            break;

        default:
            return res.status(500).json({
                msg: 'Se me olvido validar esto'
            })}

    const name = await uploadFile(req.files, undefined, colection);
    if (typeof name === 'string') {
        model.img = name;
    } else {
        // Si name no es una cadena, manejar el caso donde uploadFile no devuelve una cadena válida
        return res.status(500).json({
            msg: 'El nombre del archivo no es válido'
        });
    }


    await model.save();

    res.status(200).json({ model })
}