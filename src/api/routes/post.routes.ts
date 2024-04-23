import express from "express";
import { createPost } from "../controllers/post.controller";
import { check } from "express-validator";

const router = express.Router();


router.get("/", (req, res)=>{
    res.status(200).json({
        ok: true,
        msg: "Obtener todos los post's"
    })
})

router.get("/:id", (req, res)=>{
    res.status(200).json({
        ok: true,
        msg: "Obtener post por id"
    })
})

router.post("/:id", [
    check('id',' El id es obligatorio').isMongoId(),
    check('text', ' El texto es obligatorio').not().isEmpty(),
], createPost)

router.put("/:id", (req, res)=>{
    res.status(200).json({
        ok: true,
        msg: "Actualizar post"
    })
})

router.delete("/:id", (req, res)=>{
    res.status(200).json({
        ok: true,
        msg: "Eliminar post por id"
    })
})

module.exports = router;