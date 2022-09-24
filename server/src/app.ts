import cors from "cors";
import "dotenv/config";
import express from "express";
import MongoService from "./services/MongoService";

import { authRouter, pageRouter, profileRouter, userRouter } from "./routers";

const API_PREFIX = process.env.API_PREFIX;
const PORT = process.env.PORT || 5001;

const server = express();
server.use(cors());
server.use(express.json());

MongoService.connectToServer();

// test route
server.get("/ping", (_, res) => {
	return res.send("pong");
});

server.get(`${API_PREFIX}/ping`, (_, res) => {
	return res.send("pong");
});

// imported routers
server.use(`${API_PREFIX}/auth`, authRouter);
server.use(`${API_PREFIX}/page`, pageRouter);
server.use(`${API_PREFIX}/profile`, profileRouter);
server.use(`${API_PREFIX}/user`, userRouter);

// and finally... serve
server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
