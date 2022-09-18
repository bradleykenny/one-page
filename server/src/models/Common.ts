export interface QueryOptions {
	limit: number;
	offset: number;
}

export interface TypedRequestBody<T> extends Express.Request {
	body: T;
}
