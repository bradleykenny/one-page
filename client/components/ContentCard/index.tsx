import Card from "@src/components/Card";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { PageResponse } from "models/Page";
import { useEffect } from "react";

interface Props {
    page: PageResponse;
}

const ContentCard = (props: Props) => {
    const { page } = props;

    const editor = useEditor({
        extensions: [StarterKit],
        content: page?.content,
        editable: false,
        editorProps: {
            attributes: {
                class: "prose prose-stone focus:outline-none bg-white rounded-md max-w-full",
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
                href={page?.id && `/page/${page?.id}`}
                className="text-indigo-700 hover:text-orange-400 text-2xl font-black inline-block cursor-pointer mb-1 transition ease-in-out border-b pb-1 border-indigo-300 hover:border-orange-200">
                {page?.title}
            </a>
            <div className="mb-2">
                <p className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer inline">
                    {page?.userId}
                </p>
            </div>
            <EditorContent editor={editor} />
        </Card>
    );
};

export default ContentCard;
