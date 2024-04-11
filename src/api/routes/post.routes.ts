import express from "express";

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

router.post("/", (req, res)=>{
    res.status(200).json({
        ok: true,
        msg: "Crear post"
    })
})

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