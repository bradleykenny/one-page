import { AuthenticatedRequest } from "./Auth";
import { TimedFields } from "./Common";

export interface Project extends TimedFields {
	id: string;
	name: string;
    description?: string;
	userId: string;
	colour?: string;
}

export interface AddProjectRequest extends AuthenticatedRequest {
	name: string;
	description: string;
}
