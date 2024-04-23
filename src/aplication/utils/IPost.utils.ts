import mongoose from "mongoose";

export interface IPost {
    uid: mongoose.Schema.Types.ObjectId;
    text?: string;
    img: string;
    createAt: Date;
    likes?: number;
    comments?: number;
    state: boolean
}
