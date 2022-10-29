import { Editor } from "@tiptap/react";

class EditorService {
    private readonly editor: Editor;

    constructor(editor: Editor) {
        this.editor = editor;
    }

    handleParagraphClick() {
        this.editor.chain().focus().setParagraph().run();
    }
}

export default EditorService;
