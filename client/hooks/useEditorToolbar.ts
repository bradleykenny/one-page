import { Editor } from "@tiptap/react";

const useEditorToolbar = (editor: Editor) => {
    const handleBoldClick = () => {
        editor.chain().focus().toggleBold().run();
    };

    const handleItalicClick = () => {
        editor.chain().focus().toggleItalic().run();
    };

    const handleUnderlineClick = () => {
        editor.chain().focus().toggleUnderline().run();
    };

    const handleStrikeClick = () => {
        editor.chain().focus().toggleStrike().run();
    };

    const handleHighlightClick = () => {
        editor.chain().focus().toggleHighlight().run();
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

    const handleBulletListClick = () => {
        editor.chain().focus().toggleBulletList().run();
    }

    const handleOrderedListClick = () => {
        editor.chain().focus().toggleOrderedList().run();
    }

    const handleQuoteClick = () => {
        editor.chain().focus().toggleBlockquote().run();
    }

    const handleCodeClick = () => {
        editor.chain().focus().toggleCodeBlock().run();
    }

    return {
        handleBoldClick,
        handleItalicClick,
        handleUnderlineClick,
        handleStrikeClick,
        handleHighlightClick,
        handleParagraphClick,
        handleHeading1Click,
        handleHeading2Click,
        handleHeading3Click,
        handleBulletListClick,
        handleOrderedListClick,
        handleQuoteClick,
        handleCodeClick
    };
};

export default useEditorToolbar;
