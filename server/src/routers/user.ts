import express from "express";

const userRouter = express.Router();
userRouter.get("/test", async (req, res) => {
	res.send("USERS WORKING");
});

export default userRouter;
