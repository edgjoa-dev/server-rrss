import { model, Schema } from "mongoose";



const roleSchema = new Schema({

    role:{
        type: String,
        required: [true, 'El rol es necesario']
    }
});

const Role = model("Role", roleSchema);
export default Role;