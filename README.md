# Backend Estudio Juridico APJD ⚖️

API RESTful diseñada para el backend del estudio jurídico APJD. Proporciona endpoints para gestionar **citas, juicios, clientes, documentos, tareas, registro de movimientos, registro de facturas y usuarios** con autenticación JWT y control de roles (Secretario, Abogado, Administrador).

## Demo del proyecto
Accede a la API desplegada en [Vercel](https://back-end-estudio-juridico.vercel.app/)

## Tecnologias utilizadas 🚀🚀

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [JWT](https://jwt.io/) para autenticación
- [bcrypt](https://www.npmjs.com/package/bcrypt) para encriptación de contraseñas
- [Cloudinary](https://cloudinary.com/) para almacenamiento de archivos
- [express-validator](https://express-validator.github.io/docs/) para validación
- [multer](https://www.npmjs.com/package/multer) para manejo de archivos
- [CORS](https://www.npmjs.com/package/cors) para control de origen cruzado

## Como ejecutar el proyecto

1. Clonar este repositorio escribiendo en una terminal el siguiente comando:
   ```
   git clone https://github.com/Agustina1803/backEndEstudioJuridico.git
   ```

2. Instalar las dependencias:
   ```
   npm install
   ```

3. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   PORT=3001
   MONGODB=tu_cadena_de_conexion_mongodb
   SECRET_JWT=tu_clave_secreta_jwt
   CLOUDINARY_CLOUD_NAME=tu_cloud_name
   CLOUDINARY_API_KEY=tu_api_key
   CLOUDINARY_API_SECRET=tu_api_secret
   ```

4. Ejecutar el servidor en modo desarrollo:
   ```
   npm run dev
   ```

5. O ejecutar en modo producción:
   ```
   npm start
   ```

El servidor estará corriendo en `http://localhost:3001` (o el puerto configurado en `.env`).

## Autores
- Bulacio Agustina 👩🏻‍💻
- Varela Daiana 👩🏻‍💻
- Coronel Adrian 👨🏻‍💻
