import { Collection, Document } from "mongodb";

import { getById, getAll, getByAnyId } from "./CommonService";
import MongoService from "./MongoService";

import { Collections } from "../models/Collections";
import { AddProjectRequest, Project } from "../models/Project";

import Id from "../util/Id";
import Time from "../util/Time";

const COLLECTION_NAME = Collections.projects;

const getCollection = (): Collection<Document> => {
	const db = MongoService.getDb();
	return db.collection(COLLECTION_NAME);
};

const addProject = async (request: AddProjectRequest) => {
	const coll = getCollection();

	const id = Id.generateShortId();
	const { name, description, imageUrl, user } = request;
	const userId = user.username;
	const timeFields = Time.initialiseTimeFields();
	const color =
		request.color ??
		`#${Math.floor(Math.random() * 16777215).toString(16)}`;

	const project: Project = {
		name,
		description,
		id,
		userId,
		color,
		imageUrl,
		...timeFields,
	};

	await coll.insertOne(project);
	return id;
};

const getAllProjects = async (limit: number, offset: number) => {
	const coll = getCollection();
	const projects = getAll(coll, { limit, offset });
	return projects;
};

const getProject = async (id: string) => {
	const coll = getCollection();
	return getById(coll, id);
};

const getProjectsByIds = async (ids: string[]) => {
	const coll = getCollection();
	return await getByAnyId(coll, ids);
};

export default {
	addProject,
	getAllProjects,
	getProject,
	getProjectsByIds,
};
