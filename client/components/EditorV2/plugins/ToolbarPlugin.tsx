import { faBold, faItalic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";
import { useState } from "react";

const ToolbarPlugin = () => {
    const [editor] = useLexicalComposerContext();

    const [isBold, setIsBold] = useState(false);

    const handleBoldClick = () => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        setIsBold((state) => !state);
    };

    return (
        <div className="editor-toolbar">
            <p
                className={"inline-block rounded-md border p-4 shadow"}
                onClick={handleBoldClick}
            >
                <FontAwesomeIcon icon={faBold} />
            </p>
            <p
                className={"inline-block rounded-md border p-4 shadow"}
                onClick={handleBoldClick}
            >
                <FontAwesomeIcon icon={faItalic} />
            </p>
        </div>
    );
};

export default ToolbarPlugin;
