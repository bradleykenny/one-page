import { Blockquote } from "@tiptap/extension-blockquote";
import { BulletList } from "@tiptap/extension-bullet-list";
// TODO: fix code block
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { Highlight } from "@tiptap/extension-highlight";
import { ListItem } from "@tiptap/extension-list-item";
import { OrderedList } from "@tiptap/extension-ordered-list";
import Placeholder from "@tiptap/extension-placeholder";
import { Underline } from "@tiptap/extension-underline";
import { JSONContent, useEditor as useEditorTipTap } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { lowlight } from "lowlight";
import { cn } from "utils";

const useEditor = (content: string | JSONContent, disable?: boolean) => {
    const editorStyle = !disable ? "bg-gray-100" : "";
    const viewerStyle = disable ? " mt-0" : "";

    return useEditorTipTap({
        extensions: [
            StarterKit,
            Highlight,
            Underline,
            BulletList,
            OrderedList,
            ListItem,
            Blockquote,
            Placeholder.configure({
                placeholder: "Let' get started...",
                showOnlyWhenEditable: true,
                emptyEditorClass:
                    "cursor-text before:content-[attr(data-placeholder)] before:absolute before:top-2 before:left-2 before:text-mauve-11 before:opacity-50 before-pointer-events-none",
            }),
        ],
        content: content,
        editable: !disable,
        editorProps: {
            attributes: {
                class: cn(
                    "prose prose-stone focus:outline-none m-4 p-4 rounded-md max-w-full",
                    editorStyle,
                    viewerStyle
                ),
            },
        },
    });
};

export default useEditor;
