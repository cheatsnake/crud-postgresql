import { NoteController } from "controllers/note.controller";
import { Router } from "express";

const noteRouter: Router = Router();
const noteController = new NoteController();

noteRouter.post("/note", noteController.createNote);
noteRouter.get("/note/:personId", noteController.findNotesByPersonId);
noteRouter.put("/note", noteController.updateNoteById);
noteRouter.delete("/note/:id", noteController.deleteNoteById);

export default noteRouter;
