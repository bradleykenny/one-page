import { JSONContent } from "@tiptap/react";

export interface PageResponse {
    id: string;
    title: string;
    content: string | JSONContent;
    createdAt: number;
    updatedAt: number;
    userId: string;
    _id: string;
}
