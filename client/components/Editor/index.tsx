import { EditorContent, JSONContent } from "@tiptap/react";
import { useCompletion } from "ai/react";
import { PageResponse } from "models/Page";

import { ChangeEvent, useEffect, useState } from "react";

import useApi from "@src/hooks/useApi";
import useEditor from "@src/hooks/useEditor";

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

    const editor = useEditor(content, false);

    const {
        completion,
        input,
        stop,
        isLoading,
        handleInputChange,
        handleSubmit,
    } = useCompletion({
        api: `${process.env.NEXT_PUBLIC_API_URL}/ai/message`,
    });

    useEffect(() => {
        try {
            editor?.commands.setContent(content);
        } catch (e) {
            console.error(e);
        }
    }, [content]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        <div className="mx-auto">
            <div className="sticky top-0 z-10 -mx-4 -mt-4 border-b bg-gray-200 px-4 pt-4">
                <EditorToolbar editor={editor} onSave={handleToolbarSave} />
            </div>
            <div className="mt-0 mb-4 rounded-b-md bg-white pt-1 pb-1 shadow">
                <div className="h-full w-full">
                    <div className="m-4 mb-0">
                        <input
                            type="text"
                            value={inputTitle}
                            onChange={handleChange}
                            placeholder="Enter title here"
                            className="w-full rounded-md border-none bg-white py-3 px-4 text-4xl font-black text-indigo-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0"
                        />
                    </div>
                </div>
                <EditorContent editor={editor} />
            </div>
            <div className="w-full rounded-md border-purple-700 bg-gradient-to-br from-indigo-200 via-blue-200 to-green-200 py-3 px-4">
                <form onSubmit={handleSubmit}>
                    <div className="mt-1 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-400 p-0.5">
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Enter title here"
                            className="w-full rounded-md border-none bg-white py-3 px-4 focus:outline-none focus:ring-0"
                        />
                    </div>
                    <div className="w-full px-2 pt-4 pb-3">{completion}</div>
                </form>
            </div>
        </div>
    );
};

export default Editor;
