import express, { Request, Response } from "express";
import { Page } from "../models/Page";
import PageService from "../services/PageService";

const pageRouter = express.Router();
pageRouter.get("/test", async (req, res: Response) => {
	res.send("PAGES TEST");
});

pageRouter.post("/add", async (req: Request<Page>, res: Response) => {
	PageService.addPage(req.body);
	res.send("Page added.");
});

export default pageRouter;
