import express, { Router } from "express";
import PersonControllerFactory from "../factories/PersonControllerFactory";
import Controller from "../interfaces/Controller";

class PersonRoutes implements Controller {
    private router: Router = express.Router();
    private personController = PersonControllerFactory.create()

    public constructor() {
        this.initRoutes();
    }

    public initRoutes():void {
        this.router.get(
          '/api/v1/persons',
          this.personController.getPersons,
        );
    }
    
    public getRoutes(): Router {
        return this.router;
    }
}

export default PersonRoutes;