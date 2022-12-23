import { Request, Response } from "express";
import { Collection, Document } from "mongodb";

const getById = async (
	collection: Collection<Document>,
	req: Request,
	res: Response
) => {
	const { id } = req.params;

	const data = await collection.findOne({ id });
	res.status(200).send(data);
};

const getAll = async (
	collection: Collection<Document>,
	req: Request,
	res: Response
) => {
	const limit = Number.parseInt(req.query?.limit as string);
	const offset = Number.parseInt(req.query?.offset as string);

	try {
		const pages = await collection
			.find({})
			.limit(limit || 10)
			.skip(offset || 0)
			.toArray();

		res.status(200).json(pages);
	} catch (error) {
		res.status(400).json({ error });
	}
};

export {
	getById,
	getAll,
};
