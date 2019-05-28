
import Server from './class/server';
import { SERVER_PORT } from './global/environment';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

//bodyParser
server.app.use( bodyParser.urlencoded({ extended: true}));
server.app.use(bodyParser.json());


//cors
server.app.use( cors({ origin: true, credentials: true }));


//Rutas de servicios
server.app.use('/', router);



server.start( () => {
    console.log(`servidor corriendo en el puerto ${SERVER_PORT} `);
});