import { Request } from "express";

export interface QueryOptions {
	limit: number;
	offset: number;
}

export interface TypedRequestBody<T> extends Request {
	body: T;
}

export interface TimedFields {
	createdAt: number;
	updatedAt: number;
}
