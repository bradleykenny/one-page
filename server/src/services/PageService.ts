import { Response } from "express";
import { Collection, Document } from "mongodb";
import { Collections } from "../models/Collections";
import { QueryOptions, TypedRequestBody } from "../models/Common";
import { AddPageRequest, Page } from "../models/Page";
import MongoService from "./MongoService";

import shortid from "shortid";

const COLLECTION_NAME = Collections.pages;

const getCollection = (): Collection<Document> => {
	const db = MongoService.getDb();
	return db.collection(COLLECTION_NAME);
};

const addPage = async (
	req: TypedRequestBody<AddPageRequest>,
	res: Response
) => {
	const coll = getCollection();

	const id = shortid.generate();
	const { title, content, user } = req.body;
	const userId = user.username;

	const page: Page = {
		title,
		content,
		id,
		userId,
	};

	await coll.insertOne(page);

	res.status(200).send(`Page created: ${id}`);
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
