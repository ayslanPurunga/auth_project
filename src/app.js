import express from 'express';
import routes from './routes';
import cors from 'cors';
import './database';

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
        this.cors();
    }

    middlewares() {
        this.server.use(express.json())
    }

    routes() {
        this.server.use(routes);
    }

    cors() {
        this.server.use(cors);
    }
}

export default new App().server;