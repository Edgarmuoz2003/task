REQUISITOS PREVIOS
Tener instalado NODE.JS y npm.
Tener Instalado MongoDB Comunity server.
Tener Instalado GIT para clonar el repositorio




Intrucciones para instalar el TASK MANAGER
Descargar el proyecto de manera local con git clone y la url proporcionada

BACKEND
navegar en un terminal a la carpeta "server" e instalar las dependencias usando "npm install"
crear una base de datos con us documento para almacenar las tareas
crear un archivo ".env" y poner las variables "PORT" Y "MONGO_URI" correspondiente a la base de datos creada
Ejecutar el servidor backend usando "npm run dev" desde el terminal
tomar nota del puerto en el que corra el servidor


FRONTEND
navegar en un terminal a la carpeta "cliente" e instalar las dependencias usando "npm install"
crear un archivo .env y poner las variables de entorno "VITE_API_URL" y "VITE_API_PORT" con el puerto de escucha del servidor
ejecutar el servidor del front con "npm run dev" 
dar click en el ruta arrojada por le servidor (normalmente:  http://localhost:5174/ )
