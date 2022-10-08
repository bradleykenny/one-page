import { Request, Response } from "express";
import { Collection, Document } from "mongodb";
import { Collections } from "../models/Collections";
import { TypedRequestBody } from "../models/Common";
import { AddPageRequest, Page } from "../models/Page";
import MongoService from "./MongoService";

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

		await coll.insertOne(page);

		res.status(200).send(`Page created: ${id}`);
	} catch (error) {
		res.status(400).send({ error });
	}
};

const getPage = async (req: Request, res: Response) => {
	const { id } = req.params;
	const coll = getCollection();

	const data = await coll.findOne({ id });
	res.status(200).send(data);
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
	console.log("GET ALL");
	const limit = Number.parseInt(req.query?.limit as string);
	const offset = Number.parseInt(req.query?.offset as string);

	try {
		const coll = getCollection();

		const pages = await coll
			.find({})
			.limit(limit || 10)
			.skip(offset || 0)
			.toArray();

		res.status(200).json(pages);
	} catch (error) {
		res.status(400).json({ error });
	}
};

export default {
	addPage,
	getPage,
	getUserPages,
	getAllPages,
};
