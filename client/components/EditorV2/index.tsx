import { $getRoot, $getSelection } from "lexical";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";

interface Props {}

const theme = {
    // Theme styling goes here
};

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
        <LexicalComposer initialConfig={initialConfig}>
            <PlainTextPlugin
                contentEditable={<ContentEditable />}
                placeholder={<div>Enter some text...</div>}
            />
            <OnChangePlugin onChange={onChange} />
            <HistoryPlugin />
        </LexicalComposer>
    );
};

export default Editor;
