import { Request, Response } from "express";
import { Collection, Document } from "mongodb";
import { Collections } from "../models/Collections";
import { TypedRequestBody } from "../models/Common";
import { AddPageRequest, Page, SavePageRequest } from "../models/Page";
import MongoService from "./MongoService";
import { getById, getAll } from "./CommonService";

import Id from "../util/Id";
import Time from "../util/Time";

const COLLECTION_NAME = Collections.pages;

const getCollection = (): Collection<Document> => {
	const db = MongoService.getDb();
	return db.collection(COLLECTION_NAME);
};

const addPage = async (
	req: TypedRequestBody<AddPageRequest>,
	res: Response
) => {
	try {
		const coll = getCollection();

		const id = Id.generateShortId();
		const { title, content, user } = req.body;
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

		res.status(200).json({ id });
	} catch (error) {
		res.status(400).json({ error });
	}
};

const getPage = async (req: Request, res: Response) => {
	const coll = getCollection();
	return getById(coll, req, res);
};

const getUserPages = async (req: Request, res: Response) => {
	const { userId } = req.params;
	const limit = Number.parseInt(req.query?.limit as string);
	const offset = Number.parseInt(req.query?.offset as string);

	try {
		const coll = getCollection();

		const pages = await coll
			.find({ userId })
			.limit(limit || 10)
			.skip(offset || 0)
			.toArray();

		res.status(200).json(pages);
	} catch (error) {
		res.status(400).json({ error });
	}
};

const getAllPages = async (req: Request, res: Response) => {
	const coll = getCollection();
	return getAll(coll, req, res);
};

const updatePage = async (
	req: TypedRequestBody<SavePageRequest>,
	res: Response
) => {
	try {
		const coll = getCollection();

		const { id, title, content } = req.body;
		const timeFields = Time.initialiseTimeFields();

		const page: Partial<Page> = {
			title,
			content,
			id,
			...timeFields,
		};

		await coll.updateOne({ id }, { $set: page });

		res.status(200).send(`Page updated: ${id}`);
	} catch (error) {
		console.error(error);
		res.status(400).send({ error });
	}
};

export default {
	addPage,
	getPage,
	getUserPages,
	getAllPages,
	updatePage,
};
