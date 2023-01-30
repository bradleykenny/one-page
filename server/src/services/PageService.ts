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
	const collection = getCollection();

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

	collection.insertOne(page);

	return id;
};

const getPage = async (id: string) => {
	const collection = getCollection();
	return getById(collection, id);
};

const getUserPages = async (
	userId: string,
	limit?: number,
	offset?: number
) => {
	const collection = getCollection();
	const pages = await collection
		.find({ userId })
		.limit(limit || 10)
		.skip(offset || 0)
		.toArray();

	return pages;
};

const getProjectPages = async (
	projectId: string,
	limit?: number,
	offset?: number
) => {
	const collection = getCollection();
	const pages = await collection
		.find({ projectId })
		.limit(limit || 10)
		.skip(offset || 0)
		.toArray();

	return pages;
};

const getAllPages = async (limit: number, offset: number) => {
	const collection = getCollection();
	const pages = await getAll(collection, limit, offset);
	return pages;
};

const updatePage = async (request: SavePageRequest) => {
	const collection = getCollection();
	const { id, title, content } = request;

	const page: Partial<Page> = {
		title,
		content,
		id,
		updatedAt: Date.now(),
	};

	await collection.updateOne({ id }, { $set: page });
};

const linkProject = async (pageId: string, projectId: string) => {
	const collection = getCollection();
	await collection.updateOne({ id: pageId }, { $set: { projectId } });
};

export default {
	addPage,
	getPage,
	getUserPages,
	getProjectPages,
	getAllPages,
	linkProject,
	updatePage,
};
