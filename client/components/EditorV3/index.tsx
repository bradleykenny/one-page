import useApi from "@src/hooks/useApi";
import BulletList from "@tiptap/extension-bullet-list";
import Highlight from "@tiptap/extension-highlight";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Strike from "@tiptap/extension-strike";
import Underline from "@tiptap/extension-underline";
import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { PageResponse } from "models/Page";
import { ChangeEvent, useEffect, useState } from "react";
import EditorToolbar from "./Toolbar";

interface Props {
    page: PageResponse;
    saveAction?: (title: string, content: JSONContent) => Promise<void>;
}

const Editor = (props: Props) => {
    const { page, saveAction } = props;

    const title = page?.title;
    const content = page?.content;

    const [inputTitle, setInputTitle] = useState(title);

    const editor = useEditor({
        extensions: [StarterKit, Highlight, Underline, BulletList, OrderedList, ListItem],
        content: content,
        editorProps: {
            attributes: {
                class: "prose prose-stone focus:outline-none bg-gray-100 m-4 py-2 px-3 rounded-md max-w-full",
            },
        },
    });

    useEffect(() => {
        // TODO: stop this from re-rendering so much
        try {
            editor?.commands.setContent(content);
        } catch (e) {
            console.error(e);
        }
    }, [content]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.currentTarget.value);
    };

    const handleToolbarSave = async () => {
        if (saveAction) {
            await saveAction(inputTitle, editor.getJSON());
        } else {
            await useApi("/page/update", "POST", {
                id: page?.id,
                title: inputTitle,
                content: editor.getJSON(),
            });
        }
    };

    return (
        <div className="mx-auto h-screen">
            <div className="mb-4">
                {/* TODO make sticky */}
                <EditorToolbar editor={editor} onSave={handleToolbarSave} />
            </div>
            <div className="bg-white shadow rounded-md pt-1 pb-1">
                <div className="w-full">
                    <div className="m-4 mb-0">
                        <input
                            type="text"
                            value={inputTitle}
                            onChange={handleInputChange}
                            placeholder="Enter title here"
                            className="bg-white hover:bg-gray-100 focus:bg-gray-100 py-2 px-3 rounded-md focus:outline-none text-4xl w-full text-indigo-700 font-black mb-1"
                        />
                    </div>
                </div>
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};

export default Editor;
