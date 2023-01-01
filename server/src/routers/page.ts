import express, { Request, Response } from "express";
import { TypedRequestBody } from "../models/Common";
import { AddPageRequest, SavePageRequest } from "../models/Page";
import AuthService from "../services/AuthService";
import PageService from "../services/PageService";

const pageRouter = express.Router();
pageRouter.get("/test", async (req, res: Response) => {
	res.send("PAGES TEST");
});

pageRouter.post(
	"/",
	AuthService.isLoggedIn,
	async (req: TypedRequestBody<AddPageRequest>, res: Response) => {
		try {
			await PageService.addPage(req.body);
		} catch (error) {
			res.status(400).json({ error });
		}
	}
);

pageRouter.get(
	"/user/:userId",
	AuthService.isLoggedIn,
	async (req: Request, res: Response) => {
		try {
			const { userId } = req.params;
			const limit = Number.parseInt(req.query?.limit as string);
			const offset = Number.parseInt(req.query?.offset as string);

			const pages = await PageService.getUserPages(userId, limit, offset);
			res.status(200).json(pages);
		} catch (error) {
			res.status(400).json({ error });
		}
	}
);

pageRouter.get("/all", PageService.getAllPages); // TODO: add authentication

pageRouter.post(
	"/update",
	AuthService.isLoggedIn,
	async (req: TypedRequestBody<SavePageRequest>, res: Response) => {
		try {
			await PageService.updatePage(req.body);
			res.status(200).send(`Page updated: ${req.body.id}`);
		} catch (error) {
			console.error(error);
			res.status(400).send({ error });
		}
	}
); // TODO: add authentication

// NOTE: this needs to stay last
pageRouter.get("/:id", PageService.getPage); // TODO: add authentication

export default pageRouter;
