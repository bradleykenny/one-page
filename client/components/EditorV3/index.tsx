import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import EditorToolbar from "./Toolbar";

interface Props {
    initialContent?: string;
    saveAction?: (title: string, content: string) => Promise<void>;
}

const Editor = (props: Props) => {
    const { initialContent } = props;
    console.log("ic", initialContent);

    const editor = useEditor({
        extensions: [StarterKit],
        content: initialContent,
        editorProps: {
            attributes: {
                class: "prose prose-stone p-6 focus:outline-none",
            },
        },
    });

    useEffect(() => {
        // TODO: stop this from re-rendering so much
        editor?.commands.setContent(initialContent);
    }, [initialContent]);

    return (
        <div className="w-6/12 mx-auto h-screen">
            <div className="mb-4">
                {/* TODO make sticky */}
                <EditorToolbar editor={editor} />
            </div>
            <div className="bg-white shadow rounded-md">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};

export default Editor;
