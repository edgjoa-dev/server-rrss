
<h1 align="center">
  <br>
  <a href="https://nodejs.org/en/learn/getting-started/nodejs-with-typescript"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"alt="Nodejs" width="200"></a>
  <br>
  Backend NodeJS + Typescript
  <br>
</h1>

<h4 align="center">Backend para red social tipo instagram creada con nodejs + typesript, express, mongoose, mongoDB</h4>

<p align="center">
  <a href="https://yarnpkg.com/">
    <img src="https://img.shields.io/badge/Yarn-1.22.17-blue" alt="Yarn">
  </a>
  <a href="https://expressjs.com/">
    <img src="https://img.shields.io/badge/Express-4.x-green" alt="Express">
  </a>
  <a href="https://mongoosejs.com/">
    <img src="https://img.shields.io/badge/Mongoose-6.x-orange" alt="Mongoose">
  </a>
  <a href="https://www.mongodb.com/">
    <img src="https://img.shields.io/badge/MongoDB-5.x-brightgreen" alt="MongoDB">
  </a>
</p>
<!-- 
<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p> -->

![screenshot](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExanVvNmJrbnY5NmZsbjM1cXdlMjhzMWNtNzZhajNkb29yMTRkNnVyaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ES9cAJlcxblRESzOH1/giphy.gif)

# Backend para Red Social tipo Instagram

Este es el backend de una aplicación tipo red social, construido con Node.js y TypeScript.

## Instalación

Para instalar las dependencias del proyecto, asegúrate de tener Node.js y npm instalados en tu sistema. Luego, ejecuta el siguiente comando en la raíz del proyecto:

```
yarn install
```
## Configuración
El proyecto utiliza variables de entorno para la configuración. Asegúrate de crear un archivo .env en la raíz del proyecto con las siguientes variables:

```
PORT=3000
MONGODB_CNN=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```
Asegúrate de reemplazar your_mongodb_uri y your_jwt_secret con tus propias configuraciones.

## Uso
Para iniciar el servidor en modo de desarrollo, puedes ejecutar:

```
yarn dev
```

Esto iniciará el servidor utilizando nodemon para reiniciar automáticamente cuando se realicen cambios en el código.

## Para iniciar el servidor en modo de producción, ejecuta:

```
yarn start
```

## Dependencias
#### El proyecto utiliza las siguientes dependencias principales:

bcrypt: Para el hashing de contraseñas.  
cors: Para el manejo de CORS (Cross-Origin Resource Sharing).  
dotenv: Para cargar variables de entorno desde un archivo .env.  
express: Como framework web para Node.js.  
express-validator: Para la validación de datos en Express.  
moment: Para el manejo de fechas y horas.  
mongoose: ODM (Object Data Modeling) para MongoDB.


### Nota!!!
Talvez tengas algunos problemas para ejecutarlo, revisa la configuración de tsconfig.json  
puedes probar instalando typescript y nodemon de forma global, esto tambien ayuda a usar importaciones  
de forma:  
```
import { some } from '../server...'
```
comando de instalación  
```
npm i typescript -g
npm i nodemon -g
npm i ts-node -g
```
# Construir imagen de Docker.
### Construye la imagen

```
docker build -t nombre-de-tu-imagen .
```
### Ejecuta un contenedor basado en la imagen

```
docker run -p 8080:8080 nombre-de-tu-imagen

```

### Nota!!!
Asegurate de tener los scripts minimos dentro de package.json, como los siguientes:

```
{
  "scripts": {
    "start": "nodemon index.js",
    "dev": "nodemon ./src/app.ts",
    "build": "tsc" // Agrega esta línea
  },
  // ...
}

```
## Problemas de construcción en iamgen de Docker.  

Si tienes algún problema en la construcción de la imagen de docker del proyecto,  
verifica el archivo de configuración de tsconfig.json, debe contener por lo menos lo siguiente:

```
{
  "compilerOptions": {
    "target": "ES6", // O la versión de ECMAScript que prefieras
    "module": "commonjs",
    "outDir": "./dist", // Carpeta donde se guardarán los archivos compilados
    "rootDir": "./src", // Carpeta donde se encuentra tu código fuente TypeScript
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts"], // Patrón para incluir archivos TypeScript
  "exclude": ["node_modules"] // Excluye la carpeta node_modules
}

```

## Dependencias

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [Express](https://yarnpkg.com/package?q=express&name=express)
- [Mongoose](https://yarnpkg.com/package?q=mongoose&name=mongoose)
- [Bcrypt](https://yarnpkg.com/package?q=bcrypt&name=bcrypt)
- [Cors](https://yarnpkg.com/package?q=cors&name=cors)
- [Dotenv](https://yarnpkg.com/package?q=dotenv&name=dotenv)
- [Jsonwebtoken](https://yarnpkg.com/package?q=jsonwebtoken&name=jsonwebtoken)
- [Moment](https://yarnpkg.com/package?q=moment&name=moment)



## License

MIT

---

> Twitter [@edgjoaflo](https://twitter.com/edgjoaflo)
> Instagram [@flow_joa](https://www.instagram.com/flow_joa/)
> FaceBook [Edgar Flores Gonzalez](https://www.facebook.com/profile.php?id=100087776117249)

