import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorToolbar from "./Toolbar";

const Editor = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: "<h1>Hello World! 🌎️</h1><p>And some paragraph...</p>",
        editorProps: {
            attributes: {
                class: "prose prose-stone p-6 focus:outline-none",
            },
        },
    });

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
