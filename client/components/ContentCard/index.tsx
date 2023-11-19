import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { PageResponse } from "models/Page";
import Link from "next/link";

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
            <Link
                href={`/pages/${page?.id}`}
                className="mb-1 inline-block cursor-pointer pb-1 text-2xl font-black text-indigo-700 transition ease-in-out hover:border-orange-200 hover:text-orange-400">
                {page?.title}
            </Link>
            <div className="my-2 flex items-center border-b border-gray-200 pb-3 text-gray-600">
                <div className="mr-2 flex h-5 w-5 items-center justify-center overflow-hidden rounded-full bg-indigo-300">
                    <FontAwesomeIcon
                        icon={faUser}
                        className="mt-1 h-4 w-4 text-indigo-100"
                    />
                </div>
                {page?.userId}
            </div>
            <EditorContent editor={editor} />
            {children}
        </Card>
    );
};

export default ContentCard;
