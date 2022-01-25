import { Request, Response } from "express";
import { NoteService } from "services/note.service";

const noteService = new NoteService();

export class NoteController {
    async createNote(req: Request, res: Response) {
        try {
            console.log(req.body);
            const { title, body, personId } = req.body;
            const note = await noteService.createNote({
                title,
                body,
                personId,
            });
            return res.json(note);
        } catch (error) {
            return res.status(400).json({ error: "Incorrect data" });
        }
    }
    async findNotesByPersonId(req: Request, res: Response) {
        try {
            const { personId } = req.params;
            const notes = await noteService.findNotesByPersonId(personId);
            res.json(notes);
        } catch (error) {
            return res.status(400).json({ error: "Incorrect data" });
        }
    }
    async updateNoteById(req: Request, res: Response) {
        try {
            const { id, title, body, personId } = req.body;
            const updatedNote = await noteService.updateNoteById(id, {
                title,
                body,
                personId,
            });
            res.json(updatedNote);
        } catch (error) {
            return res.status(400).json({ error: "Incorrect data" });
        }
    }
    async deleteNoteById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const note = await noteService.deleteNoteById(id);
            return res.status(200).json(note);
        } catch (error) {
            return res.status(400).json({ error: "Incorrect data" });
        }
    }
}
