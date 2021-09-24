import PersonController from "../controllers/PersonController";

class PersonControllerFactory {
  static create(): PersonController {
    return new PersonController();
  }
}

export default PersonControllerFactory;
