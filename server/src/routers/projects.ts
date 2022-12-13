import express, { Response } from "express";
import AuthService from "../services/AuthService";
import ProjectService from "../services/ProjectService";

const projectRouter = express.Router();
projectRouter.get("/test", async (req, res: Response) => {
	res.send("PROJECTS TEST");
});

projectRouter.post("/", AuthService.isLoggedIn, ProjectService.addProject);
projectRouter.get("/all", ProjectService.getAllProjects); // TODO: add authentication

export default projectRouter;
