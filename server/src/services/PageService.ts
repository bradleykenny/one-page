import { Collection, Document } from "mongodb";
import { QueryOptions } from "../models/Common";
import { Page } from "../models/Page";
import MongoService from "./MongoService";

const COLLECTION_NAME = "pages";

const getCollection = (): Collection<Document> => {
	const db = MongoService.getDb();
	return db.collection(COLLECTION_NAME);
};

const addPage = async (page: Page) => {
	const coll = getCollection();

	await coll.insertOne(page);
};

const getPage = async (id: string) => {
	const coll = getCollection();

	return await coll.findOne({ id });
};

const getUserPages = async (userId: string, options: QueryOptions) => {
	const { limit, offset } = options;
	const coll = getCollection();

	return await coll.find({ userId }).limit(limit).skip(offset);
};

export default {
	addPage,
	getPage,
	getUserPages,
};
