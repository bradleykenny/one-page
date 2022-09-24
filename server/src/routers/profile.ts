import express from "express";
import AuthService from "../services/AuthService";
import ProfileService from "../services/ProfileService";

const profileRouter = express.Router();
profileRouter.get("/test", async (req, res) => {
	res.send("PROFILE WORKING");
});

profileRouter.get("/:id", AuthService.isLoggedIn, ProfileService.getProfile);
profileRouter.put("/:id", AuthService.isLoggedIn, ProfileService.updateProfile);

export default profileRouter;
