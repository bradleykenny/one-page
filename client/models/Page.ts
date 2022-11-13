import { JSONContent } from "@tiptap/react";

export interface PageResponse {
    id: string;
    title: string;
    content: string | JSONContent;
}
