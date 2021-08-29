import express, { Request, Response } from "express";
import next from "next";
import url from "url";

import userRouter from "./routers/userRouter";

const nextApp = next({ dir: "../client/" });
const nextHandler = nextApp.getRequestHandler();

const API_PREFIX = "/api/v1";

nextApp.prepare().then(() => {
	const server = express();
	server.use(express.json());

	// test route
	server.get("/ping", (req: Request, res: Response<string>) => {
		return res.send("pong");
	});

	// imported routers
	server.use(API_PREFIX + "/user", userRouter);

	// serve the Next.js FE files
	server.get("*", (req, res) => {
		// res.set({
		//   'Cache-Control': 'public, max-age=3600'
		// });
		const parsedUrl = url.parse(req.url, true);
		nextHandler(req, res, parsedUrl);
	});

	// and finally... serve
	server.listen(5000, () => {
		console.log("listening...");
	});
});
