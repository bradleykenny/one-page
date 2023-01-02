import { Response, Request } from "express";

import { TypedRequestBody } from "../models/Common";
import {
	AddPageRequest,
	LinkProjectRequest,
	SavePageRequest,
} from "../models/Page";

import PageService from "../services/PageService";

const addPage = async (
	req: TypedRequestBody<AddPageRequest>,
	res: Response
) => {
	try {
		const id = await PageService.addPage(req.body);
		res.status(200).json({ id });
	} catch (error) {
		res.status(500).json({ error });
	}
};

const getAllPages = async (req: Request, res: Response) => {
	try {
		const limit = Number.parseInt(req.query?.limit as string);
		const offset = Number.parseInt(req.query?.offset as string);

		const pages = await PageService.getAllPages(limit, offset);

		res.status(200).json(pages);
	} catch (error) {
		res.send(500).json({ error });
	}
};

const getUserPages = async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;
		const limit = Number.parseInt(req.query?.limit as string);
		const offset = Number.parseInt(req.query?.offset as string);

		const pages = await PageService.getUserPages(userId, limit, offset);
		res.status(200).json(pages);
	} catch (error) {
		res.status(500).json({ error });
	}
};

const updatePage = async (
	req: TypedRequestBody<SavePageRequest>,
	res: Response
) => {
	try {
		await PageService.updatePage(req.body);
		res.status(200).send(`Page updated: ${req.body.id}`);
	} catch (error) {
		console.error(error);
		res.status(500).send({ error });
	}
};

const linkProject = async (
	req: TypedRequestBody<LinkProjectRequest>,
	res: Response
) => {
	try {
		const { pageId, projectId } = req.body;
		await PageService.linkProject(pageId, projectId);

		res.status(200).send();
	} catch (error) {
		res.status(500).send({ error });
	}
};

export default {
    addPage,
	getAllPages,
	getUserPages,
	linkProject,
	updatePage,
};
