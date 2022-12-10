import {
    fa1,
    fa2,
    fa3,
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
        handleParagraphClick,
        handleHeading1Click,
        handleHeading2Click,
        handleHeading3Click,
    } = useEditorToolbar(editor);

    const isBold = editor?.isActive("bold");
    const isItalic = editor?.isActive("italic");

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
        <div className="bg-white shadow rounded-md overflow-hidden flex z-0 self-center p-1">
            <ToolbarButton icon={faBold} 
                           isSelected={isBold} 
                           onClick={handleBoldClick} />
            <ToolbarButton icon={faItalic} 
                           isSelected={isItalic} 
                           onClick={handleItalicClick} />
            <ToolbarButton icon={faUnderline} 
                           isSelected={false} 
                           onClick={handleUnderlineClick} />
            <ToolbarButton icon={faParagraph} 
                           isSelected={false} 
                           onClick={handleParagraphClick} />
            <ToolbarButton icon={fa1} 
                           isSelected={false} 
                           onClick={handleHeading1Click} />
            <ToolbarButton icon={fa2} 
                           isSelected={false} 
                           onClick={handleHeading2Click} />
            <ToolbarButton icon={fa3} 
                           isSelected={false} 
                           onClick={handleHeading3Click} />
            <div className="self-center justify-end text-right ml-auto mr-4">
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
