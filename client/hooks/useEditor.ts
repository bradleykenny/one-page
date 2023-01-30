import { Blockquote } from "@tiptap/extension-blockquote";
import { BulletList } from "@tiptap/extension-bullet-list";
// TODO: fix code block
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { Highlight } from "@tiptap/extension-highlight";
import { ListItem } from "@tiptap/extension-list-item";
import { OrderedList } from "@tiptap/extension-ordered-list";
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
        ],
        content: content,
        editable: !disable,
        editorProps: {
            attributes: {
                class: cn(
                    "prose prose-stone prose-p:my-2 focus:outline-none m-4 py-1 px-4 rounded-md max-w-full",
                    editorStyle,
                    viewerStyle
                ),
            },
        },
    });
};

export default useEditor;
