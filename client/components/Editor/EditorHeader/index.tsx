import MagicButton from "@src/components/MagicButton";

const EditorItem = ({ title, style }) => {
    return (
        <p
            className={`mb-0 mr-2 inline-block w-10 cursor-pointer rounded-lg bg-indigo-200 py-1 text-center hover:bg-indigo-300 ${style}`}
        >
            {title}
        </p>
    );
};

interface Props {}

const EditorHeader = (props: Props) => {
    return (
        <div className="mt-2 mb-4 flex items-center rounded-lg bg-indigo-100 p-4 shadow-md">
            <div className="w-full">
                <EditorItem title="B" style={"font-bold"} />
                <EditorItem title="I" style={"italic"} />
                <EditorItem title="U" style={"underline"} />
                <EditorItem title="..." style={""} />
            </div>
            <div className="flex w-auto justify-end">
                <MagicButton title="Save" />
            </div>
        </div>
    );
};

export default EditorHeader;
