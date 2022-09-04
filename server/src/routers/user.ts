import express, { Request } from "express";
import { User } from "../models/User";

const userRouter = express.Router();
userRouter.get("/test", async (req, res) => {
	res.send("USERS WORKING");
});

userRouter.post("/add", async (req: Request<User>, res) => {
	res.send(`Not implemented yet. Request body: ${JSON.stringify(req.body)}`);
});

export default userRouter;
