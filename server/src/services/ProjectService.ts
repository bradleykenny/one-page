import { Request, Response } from "express";
import { Collection, Document } from "mongodb";
import { Collections } from "../models/Collections";
import { TypedRequestBody } from "../models/Common";
import { getById, getAll } from "./CommonService";
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
		const colour = `#${Math.floor(Math.random()*16777215).toString(16)}`;

		const project: Project = {
			name,
			description,
			id,
			userId,
			colour,
			...timeFields,
		};

		await coll.insertOne(project);

		res.status(200).json({ id });
	} catch (error) {
		res.status(400).json({ error });
	}
};

const getAllProjects = async (req: Request, res: Response) => {
	const coll = getCollection();
	return getAll(coll, req, res);
};

const getProject = async (req: Request, res: Response) => {
	const coll = getCollection();
	return getById(coll, req, res);
};

export default {
	addProject,
	getAllProjects,
	getProject,
};
