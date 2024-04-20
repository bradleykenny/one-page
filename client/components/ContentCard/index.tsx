import {
    faCircleUser,
    faCube,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { PageResponse } from "models/Page";
import Link from "next/link";

import { useEffect } from "react";

import Badge from "@src/components/Badge";
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

    const badges = [
        {
            label: page?.userId,
            icon: faCircleUser,
        },
        {
            label: page?.projectId,
            icon: faCube,
        },
    ];

    return (
        <Card>
            <Link
                href={`/pages/${page?.id}`}
                className="mb-1 inline-block cursor-pointer text-2xl font-black text-indigo-700 transition ease-in-out hover:border-orange-200 hover:text-orange-400">
                {page?.title}
            </Link>
            <div className="my-2 flex items-center gap-2">
                {badges.map((badge) => (
                    <Badge label={badge.label} icon={badge.icon} />
                ))}
            </div>
            <EditorContent editor={editor} />
            {children}
        </Card>
    );
};

export default ContentCard;
