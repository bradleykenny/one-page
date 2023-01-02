import { Collection, Document } from "mongodb";

import { getById, getAll } from "./CommonService";
import MongoService from "./MongoService";

import { Collections } from "../models/Collections";
import { AddPageRequest, Page, SavePageRequest } from "../models/Page";

import Id from "../util/Id";
import Time from "../util/Time";

const COLLECTION_NAME = Collections.pages;

const getCollection = (): Collection<Document> => {
	const db = MongoService.getDb();
	return db.collection(COLLECTION_NAME);
};

const addPage = async (request: AddPageRequest) => {
	const coll = getCollection();

	const id = Id.generateShortId();
	const { title, content, user } = request;
	const userId = user.username;
	const timeFields = Time.initialiseTimeFields();

	const page: Page = {
		title,
		content,
		id,
		userId,
		...timeFields,
	};

	coll.insertOne(page);

	return id;
};

const getPage = async (id: string) => {
	const coll = getCollection();
	return getById(coll, id);
};

const getUserPages = async (
	userId: string,
	limit?: number,
	offset?: number
) => {
	const coll = getCollection();
	const pages = await coll
		.find({ userId })
		.limit(limit || 10)
		.skip(offset || 0)
		.toArray();

	return pages;
};

const getAllPages = async (limit: number, offset: number) => {
	const coll = getCollection();
	const pages = await getAll(coll, limit, offset);
	return pages;
};

const updatePage = async (request: SavePageRequest) => {
	const coll = getCollection();
	const { id, title, content } = request;

	const page: Partial<Page> = {
		title,
		content,
		id,
		updatedAt: Date.now(),
	};

	await coll.updateOne({ id }, { $set: page });
};

const addProjectToPage = async (projectId: string, pageId: string) => {
	try {
		const coll = getCollection();
	} catch (error) {
		console.error(error);
	}
};

export default {
	addPage,
	addProjectToPage,
	getPage,
	getUserPages,
	getAllPages,
	updatePage,
};
