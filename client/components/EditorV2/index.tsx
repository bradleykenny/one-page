import { $getRoot, $getSelection } from "lexical";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import ToolbarPlugin from "@src/components/EditorV2/plugins/ToolbarPlugin";
import theme from "./theme";

interface Props {}

const Editor = (props: Props) => {
    const onChange = (editorState) => {
        editorState.read(() => {
            const root = $getRoot();
            const selection = $getSelection();

            console.log(root, selection);
        });
    };

    const onError = (error) => {
        console.error(error);
    };

    const initialConfig = {
        namespace: "MyEditor",
        theme,
        onError,
    };

    return (
        <div className="mx-auto h-screen w-6/12">
            <LexicalComposer initialConfig={initialConfig}>
                <ToolbarPlugin />
                <div className="rounded-lg bg-white p-2 shadow">
                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable className="bg-white px-4 py-2 outline-0" />
                        }
                        placeholder={<div>Enter some text...</div>}
                    />
                </div>
                <OnChangePlugin onChange={onChange} />
                <HistoryPlugin />
            </LexicalComposer>
        </div>
    );
};

export default Editor;
