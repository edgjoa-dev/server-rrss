import { Schema,  model } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    img: {
        type: String,
    },
    birth_day: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ['HOMBRE', 'MUJER'],
        default: 'HOMBRE',
    },
    web_site: {
        type: String,
    },
    phone: {
        type: String,
    },
    private: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE'],
        default: 'USER_ROLE',
    },
    state: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false
    },
    createAT: {
        type: Date,
        default: Date.now,
    }
})

userSchema.methods.toJSON = function() {
    const {__v, password, _id,...user} = this.toObject();
    user.uid = _id;
    return user
}

const User = model('User', userSchema);
export default User;