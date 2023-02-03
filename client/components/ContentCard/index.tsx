import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { PageResponse } from "models/Page";

import { useEffect } from "react";

import Card from "@src/components/Card";

interface Props {
    page: PageResponse;
    children?: JSX.Element;
}

const ContentCard = (props: Props) => {
    const { children, page } = props;

    const editor = useEditor({
        extensions: [StarterKit, Highlight, Underline],
        content: page?.content,
        editable: false,
        editorProps: {
            attributes: {
                class: "prose prose-stone prose-p:my-2 focus:outline-none bg-transparent rounded-md max-w-full",
            },
        },
    });

    useEffect(() => {
        try {
            editor?.commands.setContent(page?.content);
        } catch (e) {
            console.error(e);
        }
    }, [page]);

    return (
        <Card>
            <a
                href={page?.id && `/pages/${page?.id}`}
                className="mb-1 inline-block cursor-pointer pb-1 text-2xl font-black text-indigo-700 transition ease-in-out hover:border-orange-200 hover:text-orange-400">
                {page?.title}
            </a>
            <div className="mb-2">
                <p className="inline cursor-pointer text-sm text-gray-400 hover:text-gray-600">
                    {page?.userId}
                </p>
            </div>
            <EditorContent editor={editor} />
            {children}
        </Card>
    );
};

export default ContentCard;
