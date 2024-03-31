import User from "../aplication/models/user.model";


export const existEmail = async(email:string = '') => {

    const existEmail = await User.findOne({email});

    if( existEmail ){
        throw new Error(`El email: ${email}, ya existe en la base de datos`);
    }

}