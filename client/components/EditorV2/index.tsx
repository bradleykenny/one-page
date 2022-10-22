import { $getRoot, $getSelection } from "lexical";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
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
        <div className="w-6/12 mx-auto h-screen">
            <LexicalComposer initialConfig={initialConfig}>
                <div className="shadow bg-white rounded-lg">
                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable className="outline-0 bg-white px-10 py-5" />
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
