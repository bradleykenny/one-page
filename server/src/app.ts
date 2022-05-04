import 'dotenv/config';
import cors from "cors";
import express, { Request, Response } from "express";
import userRouter from "./routers/userRouter";
import { connectToServer } from './db/connect';

const API_PREFIX = "/api/v1";
const PORT = 5001;

const server = express();
server.use(cors());
server.use(express.json());

connectToServer();

// test route
server.get("/ping", (req: Request, res: Response<string>) => {
	return res.send("pong");
});

// imported routers
server.use(API_PREFIX + "/user", userRouter);

// and finally... serve
server.listen(PORT, () => {
	console.log(`listening on port ${PORT}...`);
});
