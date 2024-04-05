import { Request, Response } from "express";
import User from "../../aplication/models/user.model";
import bcryptjs from 'bcrypt'


export const getAllUsers = async (req:Request, res:Response) => {
    const { limit = 10, from = 0 } = req.query;
    const query = { state: true };

    const [totalArr, users] = await Promise.all([
        User.countDocuments(query),
        User.find(query)
            .skip(Number(from))
            .limit(Number(limit))
    ]);

    res.status(200).json({
        totalArr,
        users,
    })
}


export const getUser = async (req:Request, res:Response) => {

    try {
        const { id } = req.params;
        const { _id, password, google, email, ...resto } = req.body;

        //*Validar contra base de datos
        if (password) {
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password, salt);
        }
        //*Obtener usuario
        const user = await User.findById(id, resto);

        return res.status(200).json({
            user
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            msg: "Error al obtener usuario, contacte con el administrador"
        })
    }


}


export const postUser = async (req:Request, res:Response) => {

    const { name, user_name, email, password, role, bio = '', birth_day = Date, gender = 'HOMBRE', web_site = '', phone = '' } = req.body;

    //*Crear usuario en la base de datos
    const user = new User({ name, user_name, email, password, role, bio, birth_day, gender, web_site, phone });

    //*Hashear la contraseña
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password, salt);

    //*Guardar usuario en la base de datos
    await user.save();

    //*Respuesta
    res.json({
        user,
    })
};


export const putUser = async (req:Request, res:Response) => {

    try {
        const { id } = req.params;
        const { _id, password, google, email, ...resto } = req.body;

        //*Validar contra base de datos
        if (password) {
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password, salt);
        }
        //*Actualizar usuario
        await User.findByIdAndUpdate(id, resto);

        //*Obtener usuario actualizado
        const userUpdated = await User.findById(id)

        return res.status(200).json({
            userUpdated
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            msg: "Error al obtener usuario, contacte con el administrador"
        })
    }

}


export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndUpdate(id, { state: false });
        console.log(user);

        if (!user) {
            res.status(404).json({ msg: 'Usuario no encontrado' });
            return;
        }

        res.json({ msg: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al intentar eliminar el usuario' });
    }
};