import db from "../database/db-connection";

export class PersonService {
    async createPerson(name: string) {
        const person = await db.query(
            "INSERT INTO person (name) values ($1) RETURNING *",
            [name]
        );
        return person.rows[0];
    }

    async findPersonById(id: string) {
        const person = await db.query("SELECT * FROM person where id = $1", [
            Number(id),
        ]);
        return person.rows[0];
    }

    async getAllPersons() {
        const persons = await db.query("SELECT * FROM person");
        return persons.rows;
    }

    async updatePersonById(id: string, name: string) {
        const updatedPerson = await db.query(
            "UPDATE person set name = $1 where id = $2 RETURNING *",
            [name, Number(id)]
        );
        return updatedPerson.rows[0];
    }

    async deletePersonById(id: string) {
        const person = await db.query("DELETE FROM person where id = $1", [
            Number(id),
        ]);
        return person.rows[0];
    }
}
