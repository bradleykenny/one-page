import { Request } from "express";

export interface QueryOptions {
	limit?: number;
	offset?: number;
	sort?: string;
	sortDir?: string;
	filter?: string;
}

export interface TypedRequestBody<T> extends Request {
	body: T;
}

export interface TimedFields {
	createdAt: number;
	updatedAt: number;
}
