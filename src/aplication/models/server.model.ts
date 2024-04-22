import express from 'express'
import cors from 'cors';
import { dbConecction } from '../../infrastructure/database/config.db';
import fileUpload  from 'express-fileupload'

export class Server {
    app:        express.Application;
    port:       string | number;
    pathUsers:  string;
    authPath:   string;
    postPath:   string;
    uploadPath: string;

    constructor() {
        this.app        = express();
        this.port       = process.env.PORT || 3000;
        this.pathUsers  = '/api/users';
        this.authPath   = '/api/auth';
        this.postPath   = '/api/post';
        this.uploadPath = '/api/upload';

        //*Database connection
        this.databaseConnection();


        //*Middlewares
        this.middlewares();

        //*Routes aplication
        this.routes();
    }

    //*Database connection with mongoose
    async databaseConnection() {
        await dbConecction();
    }


    middlewares() {

        //*CORS
        this.app.use(cors())

        //*Body Parser lectura y parseo de body
        this.app.use(express.json());

        //* //Directorio carpeta public
        // this.app.use(express.static('public'));

        //*UploadFile - cargar imagenes de publicaciones
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));

    }

    //*Routes of application
    routes(){
        this.app.use(this.authPath,     require('../../api/routes/auth.routes'));
        this.app.use(this.pathUsers,    require('../../api/routes/user.routes'));
        this.app.use(this.postPath,     require('../../api/routes/post.routes'));
        this.app.use(this.uploadPath,   require('../../api/routes/upload.routes'));
    }

    //*Listen server
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server is running on port', this.port);
        });
    }

}