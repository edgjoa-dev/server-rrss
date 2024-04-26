// cloudinaryConfig.ts
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Obtener la URL de Cloudinary desde las variables de entorno
const cloudinaryUrl = process.env.CLOUDINARY_URL;

if (!cloudinaryUrl) {
    throw new Error('No se encontró la variable de entorno CLOUDINARY_URL');
}

// Configurar Cloudinary directamente con la URL de Cloudinary
cloudinary.config({
    cloudinary_url: cloudinaryUrl
});

export default cloudinary;
