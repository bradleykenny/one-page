import express, { Response } from "express";
import AuthService from "../services/AuthService";
import PageService from "../services/PageService";

const pageRouter = express.Router();
pageRouter.get("/test", async (req, res: Response) => {
	res.send("PAGES TEST");
});

pageRouter.post("/", AuthService.isLoggedIn, PageService.addPage);
pageRouter.get(
	"/user/:userId",
	AuthService.isLoggedIn,
	PageService.getUserPages
);
pageRouter.get("/all", PageService.getAllPages); // TODO: add authentication

// NOTE: this needs to stay last
pageRouter.get("/:id", PageService.getPage); // TODO: add authentication

export default pageRouter;
