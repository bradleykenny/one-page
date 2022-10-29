import { Editor } from "@tiptap/react";

const useEditorToolbar = (editor: Editor) => {
    const handleBoldClick = () => {
        editor.chain().focus().toggleBold().run();
    };

    const handleItalicClick = () => {
        editor.chain().focus().toggleItalic().run();
    };
    const handleUnderlineClick = () => {
        // TODO: install extension
    };

    const handleParagraphClick = () => {
        editor.chain().focus().setParagraph().run();
    };

    const handleHeading1Click = () => {
        editor.chain().focus().toggleHeading({ level: 1 }).run();
    };

    const handleHeading2Click = () => {
        editor.chain().focus().toggleHeading({ level: 2 }).run();
    };

    const handleHeading3Click = () => {
        editor.chain().focus().toggleHeading({ level: 3 }).run();
    };

    return {
        handleBoldClick,
        handleItalicClick,
        handleUnderlineClick,
        handleParagraphClick,
        handleHeading1Click,
        handleHeading2Click,
        handleHeading3Click,
    };
};

export default useEditorToolbar;
