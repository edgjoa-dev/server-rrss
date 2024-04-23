import { Request, Response } from 'express';
import { uploadFile } from '../../utils';
import User from '../../aplication/models/user.model';
import Post from '../../aplication/models/post.model';
import path from 'path';
import fs from 'fs';


export const uploadImage = async (req: Request, res: Response) => {

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

    //*Limpiar imagenes previas
    if (model.img) {
        const pathImage = path.resolve(__dirname, '../uploads', colection, model.img);
        if (fs.existsSync(pathImage)) {
            fs.unlinkSync(pathImage);
        }
    }

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



export const showImage = async( req: Request, res:Response )=> {

    const { id, colection } = req.params
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

    //*Limpiar imagenes previas
    if (model.img) {
        const pathImage = path.resolve(__dirname, '../uploads', colection, model.img);
        if (fs.existsSync(pathImage)) {
            return res.sendFile(pathImage);
        }
    }

    const name = await uploadFile(req.files, undefined, colection);
    if (typeof name === 'string') {
        model.img = name;
    } else {
        // Si name no es una cadena, manejar el caso donde uploadFile no devuelve una cadena válida
        return res.status(500).json({
            msg: 'El nombre del archivo no es válido'
        });
    }


    res.status(200).json({ msg: 'No hay imagen para mostrar - falta el placeholder' })

}