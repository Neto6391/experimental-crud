import express, { Application, RequestHandler } from "express";
import Controller from "./interfaces/Controller";

class App {
    
    public app: Application
    public port: number

    constructor(
        appInit: {
            port: number;
            middleWares: Array<RequestHandler>;
            controllers: Array<Controller>;
        }
    ) {
        this.app = express();
        this.port = appInit.port;
        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
    }

  
    private middlewares(middleWares: Array<RequestHandler>) {
        middleWares.forEach((middleware) => this.app.use(middleware));
    }
  
    private routes(controllers: Array<Controller>) {
        controllers.forEach((controller) => this.app.use('/', controller.getRoutes()));
    }

    public listen() {
        return this.app.listen(this.port, () => {
            console.log(`http://localhost:${this.port}`);
        });
    }
}

export default App;