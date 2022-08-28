import express, { Request } from "express";
import { Page } from "../models/Page";
import { PageService }from "../services";

const pageRouter = express.Router();
pageRouter.get("/test", async (req, res) => {
    res.send("PAGES TEST");
});

pageRouter.post('/add', async (req: Request<Page>, res) => {
    PageService.addPage(req.body);
    res.send('Page added.');
});

export default pageRouter;
