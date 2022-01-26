import "dotenv/config";
import express, { Application, Request, Response } from "express";
import noteRouter from "./routers/note.router";
import personRouter from "./routers/person.router";

const PORT = process.env.PORT || 3000;
const app: Application = express();

app.use(express.json());
app.use("/api", noteRouter);
app.use("/api", personRouter);
app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
