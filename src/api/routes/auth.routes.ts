import { Router } from "express";
import { check } from 'express-validator'
import { fieldValidator } from "../middlewares";
import { login } from "../controllers/auth.controller";

const router = Router();

router.post('/login',[
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    fieldValidator
    ],
    login
)


module.exports = router;