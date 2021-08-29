import express, { Request, Response } from "express";
import next from "next";
import url from "url";

const nextApp = next({ dir: "../client/" });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
	const server = express();

	server.use(express.json());

	server.get("/hello", (req: Request, res: Response) => {
		return res.send("hello");
	});

	server.get("*", (req, res) => {
		// res.set({
		//   'Cache-Control': 'public, max-age=3600'
		// });
		const parsedUrl = url.parse(req.url, true);
		nextHandler(req, res, parsedUrl);
	});

	server.listen(5000, () => {
		console.log("listening...");
	});
});
