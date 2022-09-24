import { AuthenticatedRequest } from "./Auth";
import { TimedFields } from "./Common";

export interface Page extends TimedFields {
	id: string;
	title: string;
	content: string;
	userId: string;
}

export interface AddPageRequest extends AuthenticatedRequest {
	title: string;
	content: string;
}

export interface GetUserPagesRequest extends AuthenticatedRequest {}
