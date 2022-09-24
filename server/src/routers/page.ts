import express, { Response } from "express";
import AuthService from "../services/AuthService";
import PageService from "../services/PageService";

const pageRouter = express.Router();
pageRouter.get("/test", async (req, res: Response) => {
	res.send("PAGES TEST");
});

pageRouter.post("/", AuthService.isLoggedIn, PageService.addPage);

export default pageRouter;
