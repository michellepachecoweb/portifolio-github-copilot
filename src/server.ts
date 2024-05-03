// create a REST API server with express
import "reflect-metadata";
import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import dataBaseService from './services/database-service';
import userRouter from './routes/user';

const port = 3000;
const app = express();

// implement the most common middleware here, for example body-parser, cors, etc.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 

dataBaseService.initialize().then(() => {
    console.log("Database initialized");
}).catch(err => {
    console.log("Error initializing database", err);
});

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});