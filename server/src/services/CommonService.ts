import { Collection, Document } from "mongodb";
import { QueryOptions } from "../models/Common";

const getById = async (collection: Collection<Document>, id: string) => {
	const data = await collection.findOne({ id });
	return data;
};

const getByAnyId = async (collection: Collection<Document>, ids: string[]) => {
	const data = await collection.find({ id: { $in: ids } }).toArray();
	return data;
};

const getAll = async (
	collection: Collection<Document>,
	options?: QueryOptions
) => {
	const pages = await collection
		.find({})
		.limit(options?.limit || 10)
		.skip(options?.offset || 0)
		.toArray();

	return pages;
};

export { getByAnyId, getById, getAll };
