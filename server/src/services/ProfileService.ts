import { Request, Response } from "express";
import MongoService from "./MongoService";

import { Collection, Document } from "mongodb";
import { Collections } from "../models/Collections";

const COLLECTION_NAME = Collections.profile;

const getCollection = (): Collection<Document> => {
	const db = MongoService.getDb();
	return db.collection(COLLECTION_NAME);
};

const getProfile = async (request: Request<any>, res: Response) => {};

const updateProfile = async (request: Request<any>, res: Response) => {};

export default { getProfile, updateProfile };
