import { configDotenv } from 'dotenv';
import { Server } from './aplication/models/server.model';
configDotenv();


const server = new Server()
server.listen();