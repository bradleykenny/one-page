import express, { Request, Response } from "express";
import { Page } from "../models/Page";
import AuthService from "../services/AuthService";
import PageService from "../services/PageService";

const pageRouter = express.Router();
pageRouter.get("/test", async (req, res: Response) => {
	res.send("PAGES TEST");
});

pageRouter.post(
	"/add",
	AuthService.isLoggedIn,
	async (req: Request<Page>, res: Response) => {
		PageService.addPage(req.body);
		res.send("Page added.");
	}
);

export default pageRouter;
