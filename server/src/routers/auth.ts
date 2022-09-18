import express, { Request } from "express";
import { LoginRequest, RegisterRequest } from "../models/Auth";
import AuthService from "../services/AuthService";

const authRouter = express.Router();
authRouter.get("/test", async (req, res) => {
	res.send("AUTH WORKING");
});

authRouter.post("/login", async (req: Request<LoginRequest>, res) => {
	const { body } = req;

	AuthService.login(body, res);
});

authRouter.post("/register", async (req: Request<RegisterRequest>, res) => {
	const { body } = req;

	AuthService.register(body, res);
});

authRouter.get(
	"/validToken",
	AuthService.isLoggedIn,
	async (req: any, res: any) => {
		res.send("Made it.");
	}
);

export default authRouter;
