import { JSONContent } from "@tiptap/react";

import { ProjectResponse } from "./Project";

export interface PageResponse {
    _id: string;
    id: string;
    title: string;
    content: string | JSONContent;
    createdAt: number;
    updatedAt: number;
    userId: string;
    projectId?: string;
}

export interface PageResponseWithProject extends PageResponse {
    projects?: ProjectResponse[];
}
