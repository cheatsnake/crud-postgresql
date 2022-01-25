import { PersonController } from "controllers/person.controller";
import { Router } from "express";

const personRouter: Router = Router();
const personController = new PersonController();

personRouter.post("/person", personController.createPerson);
personRouter.get("/person/:id", personController.findPersonById);
personRouter.get("/persons", personController.getAllPersons);
personRouter.put("/person", personController.updatePersonById);
personRouter.delete("/person/:id", personController.deletePersonById);

export default personRouter;
