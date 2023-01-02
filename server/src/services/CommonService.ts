import { Request, Response } from "express";
import { Collection, Document } from "mongodb";

const getById = async (collection: Collection<Document>, id: string) => {
	const data = await collection.findOne({ id });
	return data;
};

const getAll = async (
	collection: Collection<Document>,
	limit: number,
	offset: number
) => {
	const pages = await collection
		.find({})
		.limit(limit || 10)
		.skip(offset || 0)
		.toArray();

	return pages;
};

export { getById, getAll };
