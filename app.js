import http from 'http';
import https from 'https';
import express from 'express';
import MongoDb from './src/helpers/MongoDb';
import Router from './src/helpers/Router';
import getCertificate from './src/utils/ssl/getCertificate';
import { SERVER } from './src/config/config';

class WebServer {
    constructor({ ssl_certificate }) {
        this.app = express();
        this.app.use(express.json());
        this.router = new Router(this.app).setAllRoutes();
        this.mongodb = new MongoDb();
        this.http = http.Server(this.app);
        if (ssl_certificate) this.https = https.Server(ssl_certificate, this.app);
    }

    listen() {
        this.http.listen(SERVER.PORT, SERVER.HOST, () => {
            console.log(`Listening on http://${SERVER.HOST}:${SERVER.PORT}`);
        });
        if (this.https) {
            this.https.listen(SERVER.HOST_SECURE, SERVER.PORT_SECURE, () => {
                console.log(`Listening with SSL on https://${SERVER.HOST_SECURE}:${SERVER.PORT_SECURE}`);
            });  
        }              
    }
}

new WebServer({
    ssl_certificate: getCertificate(),
}).listen();
