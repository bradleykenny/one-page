import express, { Request, Response } from "express";
import AiService from "../services/AiService";

const aiRouter = express.Router();
aiRouter.get("/test", async (_, res) => {
	res.send("AI WORKING");
});

aiRouter.post("/message", AiService.generateMessage);

aiRouter.post("/generate/article", AiService.generateArticle);

export default aiRouter;
