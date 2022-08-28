import express, { Request } from "express";
import { 
    LoginRequest, 
    RegisterRequest 
} from '../models/Auth';
import { AuthService } from "../services";

const authRouter = express.Router();
authRouter.get("/test", async (req, res) => {
	res.send("AUTH WORKING");
});

authRouter.post('/login', async (req: Request<LoginRequest>, res) => {
	res.send(`Not implemented yet. Request body: ${JSON.stringify(req.body)}`);
});

authRouter.post('/register', async (req: Request<RegisterRequest>, res) => {
    const { body } = req;
   
    AuthService.register(body, res);
});

export default authRouter;
