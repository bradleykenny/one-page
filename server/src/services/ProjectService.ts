import { Request, Response } from "express";
import { Collection, Document } from "mongodb";
import { Collections } from "../models/Collections";
import { TypedRequestBody } from "../models/Common";
import { getById, getAll } from "./CommonService";
import MongoService from "./MongoService";

import Id from "../util/Id";
import Time from "../util/Time";
import { AddProjectRequest, Project } from "../models/Project";
import PageService from "./PageService";

const COLLECTION_NAME = Collections.projects;

const getCollection = (): Collection<Document> => {
	const db = MongoService.getDb();
	return db.collection(COLLECTION_NAME);
};

const addProject = async (request: AddProjectRequest) => {
	const coll = getCollection();

	const id = Id.generateShortId();
	const { name, description, user } = request;
	const userId = user.username;
	const timeFields = Time.initialiseTimeFields();
	const colour = `#${Math.floor(Math.random() * 16777215).toString(16)}`;


	const project: Project = {
		name,
		description,
		id,
		userId,
		colour,
		...timeFields,
	};

	await coll.insertOne(project);
	return id;
};

const getAllProjects = async (limit: number, offset: number) => {
	const coll = getCollection();
	const projects = getAll(coll, limit, offset);
	return projects;
};

const getProject = async (id: string) => {
	const coll = getCollection();
	return getById(coll, id);
};

const addPageToProject = async (req: Request, res: Response) => {
	const coll = getCollection();

	const pageService = PageService.addProjectToPage("", "");
};

export default {
	addProject,
	getAllProjects,
	getProject,
};
