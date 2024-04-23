import { Request, Response } from "express";
import User from "../../aplication/models/user.model";
import Post from "../../aplication/models/post.model";




export const createPost = async( req: Request, res: Response )=> {
const { id } = req.params;
const { text } = req.body;

//Validar si usuario existe

const user = await User.findById(id)
if(!user) return res.status(404).json({ message: "User not found" })

const publish = new Post({ text })

await publish.save()

res.status(201).json({
    message: "Post created successfully",
    publish
})

}