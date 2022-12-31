import express, { Response } from "express";
import { Collection, Document } from "mongodb";
import { Collections } from "../models/Collections";
import MongoService from "../services/MongoService";

import testPages from '../../test/pages';
import testProjects from '../../test/projects';

const testRouter = express.Router();
testRouter.get("/test", async (req, res: Response) => {
	res.send("TESTS TEST");
});

const getCollection = (collectionName: string): Collection<Document> => {
	const db = MongoService.getDb();
	return db.collection(collectionName);
};

testRouter.get("/update/projects", (req, res) => {
    const collection = getCollection(Collections.projects);

    collection.drop();
    collection.insertMany(testProjects);

    res.status(200).json(testProjects);
});

testRouter.get("/update/pages", (req, res) => {
    const collection = getCollection(Collections.pages);

    collection.drop();
    collection.insertMany(testPages);

    res.status(200).json(testPages);
});

export default testRouter;
