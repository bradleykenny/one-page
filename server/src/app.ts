import 'dotenv/config';
import cors from "cors";
import express from "express";
import MongoService from './services/MongoService';

import {
	authRouter,
	pageRouter,
	userRouter
} from './routers';

const API_PREFIX = "/api/v1";
const PORT = 5001;

const server = express();
server.use(cors());
server.use(express.json());

MongoService.connectToServer();

// test route
server.get("/ping", (_, res) => {
	return res.send("pong");
});

// imported routers
server.use(`${API_PREFIX}/auth`, authRouter);
server.use(`${API_PREFIX}/page`, pageRouter);
server.use(`${API_PREFIX}/user`, userRouter);

// and finally... serve
server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
