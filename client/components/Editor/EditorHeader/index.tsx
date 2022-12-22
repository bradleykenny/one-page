import MagicButton from "@src/components/MagicButton";

const EditorItem = ({ title, style }) => {
    return (
        <p
            className={`mb-0 mr-2 inline-block bg-indigo-200 rounded-lg py-1 w-10 cursor-pointer text-center hover:bg-indigo-300 ${style}`}
        >
            {title}
        </p>
    );
};

interface Props {}

const EditorHeader = (props: Props) => {
    return (
        <div className="bg-indigo-100 flex mt-2 mb-4 p-4 rounded-lg items-center shadow-md">
            <div className="w-full">
                <EditorItem title="B" style={"font-bold"} />
                <EditorItem title="I" style={"italic"} />
                <EditorItem title="U" style={"underline"} />
                <EditorItem title="..." style={""} />
            </div>
            <div className="w-auto flex justify-end">
                <MagicButton title="Save" />
            </div>
        </div>
    );
};

export default EditorHeader;
