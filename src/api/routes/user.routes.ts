import express from 'express';
import { check } from 'express-validator';

import { existEmail, existUserId, existUserName, isRoleValid } from '../../utils';
import { deleteUser, getAllUsers, getUser, postUser, putUser } from '../controllers/user.controller';
import { fieldValidator, haveRole, validarJWT } from '../middlewares';


const router = express.Router();


router.get('/', getAllUsers)

router.get('/:id', [
    check('id', 'No es es un Id válido').isMongoId(),
    check('id').custom(existUserId),
    check('role').custom( isRoleValid ).not().isEmpty(),
],
    getUser
)

router.post('/', [
        check('name', 'El nombre es obligatorio, debe contener minimo 3 caracteres').not().isEmpty().isLength({ min: 3 }),
        check('user_name', 'El nombre de usuario es obligatorio, debe contener minimo 3 caracteres').custom(existUserName).not().isEmpty().isLength({ min: 3 }),
        check('email', 'El email es obligatorio').custom(existEmail).isEmail(),
        check('password', 'El password es obligatorio').isLength({ min: 9 }),
        fieldValidator
    ],
    postUser
)

router.put('/:id', [
    check('id', 'No es es un Id válido').isMongoId(),
    check('id').custom(existUserId),
    check('role').custom( isRoleValid ).not().isEmpty(),
    fieldValidator
],
    putUser
)

router.delete('/:id', [
    validarJWT,
    haveRole('ADMIN_ROLE', 'USER_ROLE'),
    check('id', 'No es es un Id válido').isMongoId(),
    check('id').custom(existUserId),
    fieldValidator
],
    deleteUser
)


module.exports = router;
