import express from 'express';
import App from './App';
import PersonRoutes from './routes/PersonRoutes';


const app = new App({
    port: 5000,
    middleWares: [
        express.json(),
        express.urlencoded({ extended: true }),
    ],
    controllers: [
        new PersonRoutes()
    ]
});

app.listen();
  