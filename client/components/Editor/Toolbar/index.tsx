import {
    fa1,
    fa2,
    fa3,
    faBold,
    faCode,
    faHeading,
    faHighlighter,
    faItalic,
    faListCheck,
    faListOl,
    faListUl,
    faParagraph,
    faQuoteLeft,
    faStrikethrough,
    faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@src/components/Button";
import MagicButton from "@src/components/MagicButton";
import useEditorToolbar from "@src/hooks/useEditorToolbar";
import { Editor } from "@tiptap/react";
import { memo, useState } from "react";
import ToolbarButton from "../ToolbarButton";

interface Props {
    editor: Editor;
    onSave: () => Promise<void>;
}

const EditorToolbar = (props: Props) => {
    const { editor, onSave } = props;

    const [isSaving, setIsSaving] = useState(false);

    const {
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
        handleCodeClick,
    } = useEditorToolbar(editor);

    const editorIsFocus = editor?.isFocused;
    const isItemActive = (name: string) => {
        return editorIsFocus && editor?.isActive(name);
    };

    const isBold = isItemActive("bold");
    const isItalic = isItemActive("italic");
    const isUnderline = isItemActive("underline");
    const isStrike = isItemActive("strike");
    const isHighlight = isItemActive("highlight");

    const isOrderedList = isItemActive("orderedList");
    const isBulletList = isItemActive("bulletList");

    const handleSaveClick = async () => {
        try {
            setIsSaving(true);
            await onSave?.();
            setTimeout(() => setIsSaving(false), 500);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        // ${!editorIsFocus && "opacity-75 pointer-events-none"}`}>
        <div className="z-0 flex w-full self-center overflow-hidden rounded-t-md bg-white p-1 shadow ">
            <div className="flex overflow-hidden overflow-x-scroll">
                <ToolbarButton
                    icon={faBold}
                    isSelected={isBold}
                    onClick={handleBoldClick}
                />
                <ToolbarButton
                    icon={faItalic}
                    isSelected={isItalic}
                    onClick={handleItalicClick}
                />
                <ToolbarButton
                    icon={faUnderline}
                    isSelected={isUnderline}
                    onClick={handleUnderlineClick}
                />
                <ToolbarButton
                    icon={faStrikethrough}
                    isSelected={isStrike}
                    onClick={handleStrikeClick}
                />
                <ToolbarButton
                    icon={faHighlighter}
                    isSelected={isHighlight}
                    onClick={handleHighlightClick}
                />
                <span className="m-2 border border-gray-300" />
                <ToolbarButton
                    icon={faParagraph}
                    isSelected={false}
                    onClick={handleParagraphClick}
                />
                <ToolbarButton
                    icon={fa1}
                    isSelected={false}
                    onClick={handleHeading1Click}
                />
                <ToolbarButton
                    icon={fa2}
                    isSelected={false}
                    onClick={handleHeading2Click}
                />
                <ToolbarButton
                    icon={fa3}
                    isSelected={false}
                    onClick={handleHeading3Click}
                />
                <span className="m-2 border border-gray-300" />
                <ToolbarButton
                    icon={faListOl}
                    isSelected={isOrderedList}
                    onClick={handleOrderedListClick}
                />
                <ToolbarButton
                    icon={faListUl}
                    isSelected={isBulletList}
                    onClick={handleBulletListClick}
                />
                <ToolbarButton
                    icon={faListCheck}
                    isSelected={false}
                    onClick={undefined}
                />
                <span className="m-2 border border-gray-300" />
                <ToolbarButton
                    icon={faQuoteLeft}
                    isSelected={false}
                    onClick={handleQuoteClick}
                />
                <ToolbarButton
                    icon={faCode}
                    isSelected={false}
                    onClick={handleCodeClick}
                />
            </div>
            <div className="ml-auto mr-2 flex h-full flex-row justify-end gap-2 self-center text-right">
                {/* <Button look="soft" label="View" /> */}
                <MagicButton
                    title="Save"
                    onClick={handleSaveClick}
                    isLoading={isSaving}
                />
            </div>
        </div>
    );
};

export default memo(EditorToolbar);
