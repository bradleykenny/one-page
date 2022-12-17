import cors from "cors";
import "dotenv/config";
import express from "express";
import MongoService from "./services/MongoService";

import AuthRouter from "./routers/auth";
import PageRouter from "./routers/page";
import ProfileRouter from "./routers/profile";
import ProjectRouter from "./routers/project";
import UserRouter from "./routers/user";

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
server.use(`${API_PREFIX}/auth`, AuthRouter);
server.use(`${API_PREFIX}/page`, PageRouter);
server.use(`${API_PREFIX}/profile`, ProfileRouter);
server.use(`${API_PREFIX}/project`, ProjectRouter);
server.use(`${API_PREFIX}/user`, UserRouter);

// and finally... serve
server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
