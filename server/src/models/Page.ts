import { ObjectId } from "mongodb";
import { AuthenticatedRequest } from "./Auth";
import { TimedFields } from "./Common";

export interface Page extends TimedFields {
	_id?: ObjectId;
	id: string;
	title: string;
	content: Object;
	userId: string;
}

export interface AddPageRequest extends AuthenticatedRequest {
	title: string;
	content: string;
}

export interface SavePageRequest extends AuthenticatedRequest {
	id: string;
	title: string;
	content: string;
}

export interface GetUserPagesRequest extends AuthenticatedRequest {}
