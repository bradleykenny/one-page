import { useCallback, useEffect, useState } from "react";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import EditorHeader from "./EditorHeader";
import Element from "./Element";

// TODO: we can optimise this better
function useResetKey(value: string) {
    const [key, setKey] = useState(0);
    useEffect(() => {
        setKey((n) => n + 1);
    }, [value]);
    return key;
}

interface Props {
    value: string;
}

const Editor = (props: Props) => {
    const { value } = props;
    const key = useResetKey(value);

    const initialValue = [
        {
            type: "heading",
            children: [{ text: "Heading" }],
        },
        {
            type: "paragraph",
            children: [{ text: value }],
        },
    ];

    const [editor] = useState(() => withReact(createEditor()));

    const renderElement = useCallback((props) => <Element {...props} />, []);

    return (
        <div className="w-6/12 mx-auto">
            <EditorHeader />
            <div className="shadow-md bg-white rounded-lg px-8 py-6">
                <Slate editor={editor} value={initialValue} key={key}>
                    <Editable
                        renderElement={renderElement}
                        placeholder="What do you want to share?"
                    />
                </Slate>
            </div>
        </div>
    );
};

export default Editor;
