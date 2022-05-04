import express, { Request, Response } from "express";
import { getDb } from "../db/connect";

const userRouter = express.Router();
userRouter.get("/", async (req: Request, res: Response) => {
	const db = getDb();
	
	res.send("All users returned here.");
});

export default userRouter;
