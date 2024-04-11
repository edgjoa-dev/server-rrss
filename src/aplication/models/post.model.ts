import mongoose from 'mongoose';
import { IPost } from '../utils';

const postSchema = new mongoose.Schema<IPost>({
    uid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    texto: {
        type: String,
    },
    img:{
        type: String,
        trim: true,
        required: true
    },
    createAt:
    {
        type: Date,
        required: true
    },
    likes:{
        type: Number,
        default: 0
    },
    comments:{
        type: Number,
        default: 0
    },
});

const Post = mongoose.model<IPost>('Post', postSchema);
export default Post;
