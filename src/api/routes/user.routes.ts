import express, { request, response } from 'express';
import { check } from 'express-validator';

import { fieldValidator } from '../middlewares/validate-fields.middleware'
import { existEmail, existUserName, isRoleValid } from '../../utils';
import { getAllUsers, getUser, postUser } from '../controllers/user.controller';


const router = express.Router();


router.get('/', getAllUsers)

router.get('/:id', getUser)

router.post('/', [
        check('name', 'El nombre es obligatorio, debe contener minimo 3 caracteres').not().isEmpty().isLength({ min: 3 }),
        check('user_name', 'El nombre de usuario es obligatorio, debe contener minimo 3 caracteres').custom(existUserName).not().isEmpty().isLength({ min: 3 }),
        check('email', 'El email es obligatorio').custom(existEmail).isEmail(),
        check('password', 'El password es obligatorio').isLength({ min: 9 }),
        fieldValidator
    ],
    postUser
)

router.put('/', (req = request, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Actualizar usuario',
    })
})

router.delete('/', (req = request, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Usuario eliminado',
    })
})


module.exports = router;
