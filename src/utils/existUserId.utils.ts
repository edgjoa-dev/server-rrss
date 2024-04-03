import User from "../aplication/models/user.model";

export const existUserId = async( id:string ) => {

    const existUser = await User.findById( id );
        if (!existUser) {
            throw new Error(`El id: ${id}, no existe en la base de datos`);
        }
}