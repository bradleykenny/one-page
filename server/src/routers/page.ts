import express, { Request } from "express";
import { Page } from "../models/Page";
import MongoService from "../services/MongoService";
import PageService from "../services/PageService";

const pageRouter = express.Router();
pageRouter.get("/test", async (req, res) => {
    res.send("PAGES TEST");
});

pageRouter.post('/add', async (req: Request<Page>, res) => {
    PageService.addPage(req.body);
    res.send('Page added.');
});

export default pageRouter;
