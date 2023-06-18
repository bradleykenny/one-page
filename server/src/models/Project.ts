import { ObjectId } from "mongodb";
import { AuthenticatedRequest } from "./Auth";
import { TimedFields } from "./Common";

export interface Project extends TimedFields {
	_id?: ObjectId;
	id: string;
	name: string;
    description?: string;
	userId: string;
	color?: string; // migrate `colour` => `color`
	imageUrl?: string;
}

export interface AddProjectRequest extends AuthenticatedRequest {
	name: string;
	description: string;
	imageUrl: string;
	color?: string;
}
