import parser from "html-react-parser";
import marked from "marked";

interface MarkdownCardProps {
  markdown: string;
}

const MarkdownCard = (props: MarkdownCardProps) => {
  const markdownContent = marked(props.markdown);
  const parsedMarkdownAsHTML = parser(markdownContent);

  return (
    <div className="shadow-md bg-white w-6/12 mx-auto rounded-lg p-5">
      {parsedMarkdownAsHTML}
    </div>
  );
};

export default MarkdownCard;
