import Role from "../aplication/models/role.model";

export const isRoleValid = async( role: string ='USER_ROLE' ) => {

    const existRole = await Role.findOne({ role });
    if ( !existRole ) {
        throw new Error(`El rol registrado: ${ role },  no es válido en la base de datos`);
    }
}
