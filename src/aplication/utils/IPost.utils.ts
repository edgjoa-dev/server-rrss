import mongoose from "mongoose";

export interface IPost {
    uid: mongoose.Schema.Types.ObjectId;
    texto?: string;
    img: string;
    createAt: Date;
    likes?: number;
    comments?: number;
}
