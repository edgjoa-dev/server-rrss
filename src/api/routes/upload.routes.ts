import { Router } from 'express';
import { updateImage, uploadImage } from '../controllers/upload.controller';
import { check } from 'express-validator';
import { allowColections } from '../middlewares/valid-colection.middleware';
import { fieldValidator } from '../middlewares';


const router = Router();

router.post('/', uploadImage)

router.put('/:colection/:id', [
    check('id', 'El id debe ser id válido de mongoDB').isMongoId(),
    check('colection').custom((c: string) => allowColections(c, ['avatar', 'posts'])),
    fieldValidator,
], updateImage)

module.exports = router;
