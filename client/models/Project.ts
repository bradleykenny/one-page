import { PageResponse } from "./Page";

export type ProjectAccess = "PRIVATE" | "PUBLIC";

export interface ProjectResponse {
    _id: string;
    name: string;
    description: string;
    id: string;
    userId: string;
    updatedAt: number;
    createdAt: number;
    imageUrl: string;
    access: ProjectAccess;
    colour?: string;
    pages?: PageResponse[];
}
