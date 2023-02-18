import express, { Request, Response } from "express";

import PageController from "../controllers/PageController";

import AuthService from "../services/AuthService";
import PageService from "../services/PageService";

const pageRouter = express.Router();
pageRouter.get("/test", async (req, res: Response) => {
	res.send("PAGES TEST");
});

pageRouter.post("/", AuthService.isLoggedIn, PageController.addPage);
pageRouter.get(
	"/user/:userId",
	AuthService.isLoggedIn,
	PageController.getUserPages
);
pageRouter.get(
	"/project/:projectId",
	AuthService.isLoggedIn,
	PageController.getProjectPages
);
pageRouter.get("/all", AuthService.isLoggedIn, PageController.getAllPages);
pageRouter.post("/update", AuthService.isLoggedIn, PageController.updatePage);
pageRouter.post(
	"/link-project",
	AuthService.isLoggedIn,
	PageController.linkProject
);

// NOTE: this needs to stay last
pageRouter.get(
	"/:id",
	AuthService.isLoggedIn,
	async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const page = await PageService.getPage(id);

			res.status(200).json(page);
		} catch (error) {
			res.send(500).json({ error });
		}
	}
);

export default pageRouter;
