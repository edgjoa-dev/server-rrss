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
```

## Licencia
Este proyecto está bajo la licencia MIT.