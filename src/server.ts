// create a REST API server with express
import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import "reflect-metadata";

const port = 3000;
const app = express();

// implement the most common middleware here, for example body-parser, cors, etc.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});