import { ChangeEvent, useEffect, useState } from "react";
import useApi from "@src/hooks/useApi";
import { EditorContent, JSONContent } from "@tiptap/react";
import { PageResponse } from "models/Page";
import EditorToolbar from "./Toolbar";
import useEditor from "@src/hooks/useEditor";

interface Props {
    page: PageResponse;
    saveAction?: (title: string, content: JSONContent) => Promise<void>;
}

const Editor = (props: Props) => {
    const { page, saveAction } = props;

    const title = page?.title;
    const content = page?.content;

    const [inputTitle, setInputTitle] = useState(title);

    const editor = useEditor(content, false);

    useEffect(() => {
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
            <div className="mb-4 fixed top-20 pt-4 z-10 bg-gray-200 rounded-b-lg">
                {/* TODO make sticky */}
                <EditorToolbar editor={editor} onSave={handleToolbarSave} />
            </div>
            <div className="bg-white shadow rounded-md pt-1 pb-1 mt-16">
                <div className="w-full">
                    <div className="m-4 mb-0">
                        <input
                            type="text"
                            value={inputTitle}
                            onChange={handleInputChange}
                            placeholder="Enter title here"
                            className="bg-white hover:bg-gray-100 focus:bg-gray-100 py-2 px-3 rounded-md focus:outline-none text-4xl w-full text-indigo-700 font-black mb-1 border-none focus:border-none"
                        />
                    </div>
                </div>
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};

export default Editor;
