import {
    faBold,
    faHeading,
    faItalic,
    faParagraph,
    faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MagicButton from "@src/components/MagicButton";
import useEditorToolbar from "@src/hooks/useEditorToolbar";
import { Editor } from "@tiptap/react";

interface Props {
    editor: Editor;
}

const EditorToolbar = (props: Props) => {
    const { editor } = props;

    const {
        handleBoldClick,
        handleItalicClick,
        handleUnderlineClick,
        handleParagraphClick,
        handleHeading1Click,
        handleHeading2Click,
        handleHeading3Click,
    } = useEditorToolbar(editor);

    const isBold = editor?.isActive("bold");

    return (
        <div className="bg-white shadow rounded-md overflow-hidden flex">
            <button
                onClick={handleBoldClick}
                className={`${
                    isBold
                        ? "bg-indigo-200 hover:bg-indigo-300"
                        : "bg-white hover:bg-gray-100"
                } border-r p-4 `}>
                <FontAwesomeIcon icon={faBold} />
            </button>
            <button
                onClick={handleItalicClick}
                className="bg-white border-r p-4 hover:bg-gray-100">
                <FontAwesomeIcon icon={faItalic} />
            </button>
            <button
                onClick={handleUnderlineClick}
                className="bg-white border-r p-4 hover:bg-gray-100">
                <FontAwesomeIcon icon={faUnderline} />
            </button>
            <button
                onClick={handleParagraphClick}
                className="bg-white border-r p-4 hover:bg-gray-100">
                <FontAwesomeIcon icon={faParagraph} />
            </button>
            <button
                onClick={handleHeading1Click}
                className="bg-white border-r p-4 hover:bg-gray-100">
                <FontAwesomeIcon icon={faHeading} />1
            </button>
            <button
                onClick={handleHeading2Click}
                className="bg-white border-r p-4 hover:bg-gray-100">
                <FontAwesomeIcon icon={faHeading} />2
            </button>
            <button
                onClick={handleHeading3Click}
                className="bg-white border-r p-4 hover:bg-gray-100">
                <FontAwesomeIcon icon={faHeading} />3
            </button>
            <div className="self-center justify-end text-right ml-auto mr-4">
                <MagicButton title="Save" />
            </div>
        </div>
    );
};

export default EditorToolbar;
