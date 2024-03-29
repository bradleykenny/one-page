import { Collection, Document } from "mongodb";

import MongoService from "./MongoService";

import { Collections } from "../models/Collections";

const COLLECTION_NAME = Collections.users;

const getCollection = (): Collection<Document> => {
	const db = MongoService.getDb();
	return db.collection(COLLECTION_NAME);
};

const getUser = async (id: string) => {
	const coll = getCollection();

	return await coll.findOne({ id });
};

export default {
	getUser,
};
