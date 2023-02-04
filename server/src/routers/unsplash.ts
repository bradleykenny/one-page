import express, { Request } from "express";
import { User } from "../models/User";
import AuthService from "../services/AuthService";
import UnsplashService from "../services/UnsplashService";

const unsplashRouter = express.Router();
unsplashRouter.get("/test", async (req, res) => {
	res.send("UNSPLASH WORKING");
});

unsplashRouter.get(
	"/get",
	// AuthService.isLoggedIn,
	async (req: Request, res: any) => {
		try {
			const page = Number.parseInt(req.query?.page as string);
			const photos = await UnsplashService.getPhotos(page);
			res.json(photos?.data);
		} catch (error) {
			res.json({ error });
		}
	}
);

unsplashRouter.get(
	"/search",
	// AuthService.isLoggedIn,
	async (req: Request, res: any) => {
		try {
			const { keyword } = req.query;
			const page = Number.parseInt(req.query?.page as string);

			const photos = await UnsplashService.searchPhotos(keyword as string, page);
			
			res.json(photos?.data);
		} catch (error) {
			res.json({ error });
		}
	}
);

export default unsplashRouter;
