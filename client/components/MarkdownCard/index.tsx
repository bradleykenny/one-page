import parser from "html-react-parser";
import marked from "marked";

interface MarkdownCardProps {
  markdown: string;
}

const MarkdownCard = (props: MarkdownCardProps) => {
  const markdownContent = marked.parse(props.markdown);
  const parsedMarkdownAsHTML = parser(markdownContent);

  const imageUrl = undefined;
  // ("https://images.unsplash.com/photo-1663208848595-36ce355cb715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80");

  return (
    <div className="shadow-md bg-white w-6/12 mx-auto rounded-lg px-8 py-5">
      {imageUrl && (
        <img src={imageUrl} className={`rounded-t-lg h-36 w-full bg-cover`} />
      )}
      {parsedMarkdownAsHTML}
    </div>
  );
};

export default MarkdownCard;
