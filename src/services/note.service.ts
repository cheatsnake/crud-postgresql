import db from "../database/db-connection";

interface noteDto {
    title: string;
    body: string;
    personId: string;
}

export class NoteService {
    async createNote(dto: noteDto) {
        const note = await db.query(
            "INSERT INTO note (title, body, person_id) values ($1, $2, $3) RETURNING *",
            [dto.title, dto.body, Number(dto.personId)]
        );
        return note.rows[0];
    }
    async findNotesByPersonId(personId: string) {
        const notes = await db.query(
            "SELECT * FROM note where person_id = $1",
            [Number(personId)]
        );
        return notes.rows;
    }
    async updateNoteById(id: string, dto: noteDto) {
        const updatedNote = await db.query(
            "UPDATE note set title = $1, body = $2 where id = $3 RETURNING *",
            [dto.title, dto.body, Number(id)]
        );
        return updatedNote.rows[0];
    }
    async deleteNoteById(id: string) {
        const note = await db.query("DELETE FROM note where id = $1", [
            Number(id),
        ]);
        return note.rows[0];
    }
}
