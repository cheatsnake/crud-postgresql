import { Request, Response } from "express";
import { PersonService } from "../services/person.service";

const personService = new PersonService();

export class PersonController {
    async createPerson(req: Request, res: Response) {
        try {
            const { name } = req.body;
            const person = await personService.createPerson(name);
            return res.json(person);
        } catch (error) {
            return res.status(400).json({ error: "Incorrect data" });
        }
    }

    async findPersonById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const person = await personService.findPersonById(id);
            res.json(person);
        } catch (error) {
            return res.status(400).json({ error: "Incorrect data" });
        }
    }

    async getAllPersons(req: Request, res: Response) {
        try {
            const persons = await personService.getAllPersons();
            res.json(persons);
        } catch (error) {
            return res.status(500).json({ error: "Something went wrong" });
        }
    }

    async updatePersonById(req: Request, res: Response) {
        try {
            const { id, name } = req.body;
            const updatedPerson = await personService.updatePersonById(
                id,
                name
            );
            res.json(updatedPerson);
        } catch (error) {
            return res.status(400).json({ error: "Incorrect data" });
        }
    }

    async deletePersonById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const person = await personService.deletePersonById(id);
            return res.status(200).json(person);
        } catch (error) {
            return res.status(400).json({ error: "Incorrect data" });
        }
    }
}
