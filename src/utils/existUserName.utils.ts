import User from "../aplication/models/user.model";


export const existUserName = async(user_name:string = '') => {

    const existUserName = await User.findOne({user_name});

    if( existUserName ){
        throw new Error(`El nombre de usuario: ${user_name}, ya existe en la base de datos`);
    }

}