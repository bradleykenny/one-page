import { AuthenticatedRequest } from "./Auth";

export interface Page {
	id: string;
	title: string;
	content: string;
	userId: string;
}

export interface AddPageRequest extends AuthenticatedRequest {
	title: string;
	content: string;
}
