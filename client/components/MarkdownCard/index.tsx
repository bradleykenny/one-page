import parser from "html-react-parser";
import marked from "marked";

interface MarkdownCardProps {
    title?: string;
    id?: string;
    markdown: string;
}

const MarkdownCard = (props: MarkdownCardProps) => {
    const markdownContent = marked.parse(props.markdown.toString());
    const parsedMarkdownAsHTML = parser(markdownContent);

    const imageUrl = undefined;
    // ("https://images.unsplash.com/photo-1663208848595-36ce355cb715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80");

    return (
        <div className="shadow-sm bg-white w-6/12 mx-auto rounded-lg px-8 py-6 hover:shadow-md transition ease-in-out duration-400">
            {imageUrl && (
                <img
                    src={imageUrl}
                    className={`rounded-t-lg h-36 w-full bg-cover`}
                />
            )}
            <a
                href={props.id && `/page/${props.id}`}
                className="text-indigo-700 hover:text-orange-400 text-2xl font-black inline-block pr-8 cursor-pointer mb-2 transition ease-in-out"
            >
                {props.title}
            </a>
            {parsedMarkdownAsHTML}
        </div>
    );
};

export default MarkdownCard;
