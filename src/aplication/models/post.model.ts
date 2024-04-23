import mongoose from 'mongoose';
import { IPost } from '../utils';

const postSchema = new mongoose.Schema<IPost>({
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    text: {
        type: String,
    },
    img:{
        type: String,
        trim: true,
    },
    createAt:
    {
        type: Date,
        default: Date.now,
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
