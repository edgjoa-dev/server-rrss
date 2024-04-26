import { Router } from 'express';
import { showImage, updateImageCloudinary, uploadImage } from '../controllers/upload.controller';
import { check } from 'express-validator';
import { allowColections } from '../middlewares/valid-colection.middleware';
import { fieldValidator, validateFileUpload } from '../middlewares';


const router = Router();

router.post('/', validateFileUpload, uploadImage)

router.get('/:colection/:id', [
    check('colection').custom((c: string) => allowColections(c, ['users', 'posts'])),
    check('id', 'El id debe ser id válido de mongoDB').isMongoId(),
    fieldValidator,
], showImage)

router.put('/:colection/:id', [
    validateFileUpload,
    check('id', 'El id debe ser id válido de mongoDB').isMongoId(),
    check('colection').custom((c: string) => allowColections(c, ['users', 'posts'])),
    fieldValidator,
], updateImageCloudinary)


module.exports = router;
