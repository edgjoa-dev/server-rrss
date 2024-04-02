import { request, response } from "express";
import User from "../../aplication/models/user.model";
import bcryptjs from 'bcrypt'


export const getAllUsers = async (req = request, res = response) => {
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


export const getUser = async (req = request, res = response) => {

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
        res.status(400).json({
            ok: false,
            msg: "Error al obtener usuario, contacte con el administrador"
        })
    }


}


export const postUser = async (req = request, res = response) => {

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