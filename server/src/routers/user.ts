import express, { Request } from "express";
import { User } from "../models/User";
import AuthService from "../services/AuthService";

const userRouter = express.Router();
userRouter.get("/test", async (req, res) => {
	res.send("USERS WORKING");
});

userRouter.post(
	"/add",
	AuthService.isLoggedIn,
	async (req: Request<User>, res: any) => {
		res.send(
			`Not implemented yet. Request body: ${JSON.stringify(req.body)}`
		);
	}
);

export default userRouter;
