import express, { Request, Response } from "express";
import AuthService from "../services/AuthService";

const authRouter = express.Router();
authRouter.get("/test", async (_, res) => {
	res.send("AUTH WORKING");
});

authRouter.post("/login", AuthService.login);
authRouter.post("/register", AuthService.register);

authRouter.get(
	"/validToken",
	AuthService.isLoggedIn,
	async (req: Request, res: Response) => {
		res.send("Made it.");
	}
);

export default authRouter;
