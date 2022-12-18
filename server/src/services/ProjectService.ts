import { Request, Response } from "express";
import { Collection, Document } from "mongodb";
import { Collections } from "../models/Collections";
import { TypedRequestBody } from "../models/Common";
import MongoService from "./MongoService";

import Id from "../util/Id";
import Time from "../util/Time";
import { AddProjectRequest, Project } from "../models/Project";

const COLLECTION_NAME = Collections.projects;

const getCollection = (): Collection<Document> => {
	const db = MongoService.getDb();
	return db.collection(COLLECTION_NAME);
};

const addProject = async (
	req: TypedRequestBody<AddProjectRequest>,
	res: Response
) => {
	try {
		const coll = getCollection();

		const id = Id.generateShortId();
		const { name, description, user } = req.body;
		const userId = user.username;
		const timeFields = Time.initialiseTimeFields();

		const project: Project = {
			name,
			description,
			id,
			userId,
			...timeFields,
		};

		await coll.insertOne(project);

		res.status(200).json({ id });
	} catch (error) {
		res.status(400).json({ error });
	}
};

const getAllProjects = async (req: Request, res: Response) => {
	const limit = Number.parseInt(req.query?.limit as string);
	const offset = Number.parseInt(req.query?.offset as string);

	try {
		const coll = getCollection();

		const projects = await coll
			.find({})
			.limit(limit || 10)
			.skip(offset || 0)
			.toArray();

		res.status(200).json(projects);
	} catch (error) {
		res.status(400).json({ error });
	}
};

const getProject = async (req: Request, res: Response) => {
	const { id } = req.params;
	const coll = getCollection();

	const data = await coll.findOne({ id });
	res.status(200).send(data);
};

export default {
	addProject,
	getAllProjects,
	getProject
};
