import { Request, Response } from "express";
import { Collection, Document } from "mongodb";

import MongoService from "./MongoService";

import { Collections } from "../models/Collections";

const COLLECTION_NAME = Collections.profile;

const getCollection = (): Collection<Document> => {
	const db = MongoService.getDb();
	return db.collection(COLLECTION_NAME);
};

const getProfile = async (request: Request<any>, res: Response) => {};

const updateProfile = async (request: Request<any>, res: Response) => {};

export default { getProfile, updateProfile };
