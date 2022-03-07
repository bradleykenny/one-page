import cors from "cors";
import express, { Request, Response } from "express";
import userRouter from "./routers/userRouter";

const API_PREFIX = "/api/v1";
const PORT = 5000;

const server = express();
server.use(cors());
server.use(express.json());

// test route
server.get("/ping", (req: Request, res: Response<string>) => {
	return res.send("pong");
});

// imported routers
server.use(API_PREFIX + "/user", userRouter);

// and finally... serve
server.listen(5000, () => {
	console.log(`listening on port ${PORT}...`);
});
