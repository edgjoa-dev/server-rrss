import { request, response } from "express";
import User from "../../aplication/models/user.model";
import bcryptjs from 'bcrypt'


export const postUser = async(req=request, res=response)=> {

    const { name, user_name, email, password, role, bio='', birth_day=Date, gender='HOMBRE', web_site='', phone='' } = req.body;

    //*Crear usuario en la base de datos
    const user = new User ({ name, user_name, email, password, role, bio, birth_day, gender, web_site, phone });

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