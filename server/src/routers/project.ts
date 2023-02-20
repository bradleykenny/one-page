import express, { Request, Response } from "express";
import { TypedRequestBody } from "../models/Common";
import { AddProjectRequest } from "../models/Project";
import AuthService from "../services/AuthService";
import ProjectService from "../services/ProjectService";

const projectRouter = express.Router();
projectRouter.get("/test", async (req, res: Response) => {
	res.send("PROJECTS TEST");
});

projectRouter.post(
	"/",
	AuthService.isLoggedIn,
	async (req: TypedRequestBody<AddProjectRequest>, res: Response) => {
		try {
			const id = await ProjectService.addProject(req.body);
			res.status(200).json({ id });
		} catch (error) {
			res.send(400).json({ error });
		}
	}
);

projectRouter.get(
	"/all",
	AuthService.isLoggedIn,
	async (req: Request, res: Response) => {
		try {
			const limit = Number.parseInt(req.query?.limit as string);
			const offset = Number.parseInt(req.query?.offset as string);

			const pages = await ProjectService.getAllProjects(limit, offset);

			res.status(200).send(pages);
		} catch (error) {
			res.status(500).json({ error });
		}
	}
);

projectRouter.get(
	"/byIds",
	AuthService.isLoggedIn,
	async (req: Request, res: Response) => {
		try {
			const { ids } = req.query;
			const page = await ProjectService.getProjectsByIds(ids as string[]);

			res.status(200).json(page);
		} catch (error) {
			res.status(500).json({ error });
		}
	}
);

// NOTE: this needs to stay last
projectRouter.get(
	"/:id",
	AuthService.isLoggedIn,
	async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const page = await ProjectService.getProject(id);

			res.status(200).json(page);
		} catch (error) {
			res.status(500).json({ error });
		}
	}
);

export default projectRouter;
