import { JSONContent } from "@tiptap/react";

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
