import React from "react";
import parser from "html-react-parser";
import marked from "marked";

interface IProps {
	markdown: string;
}

const Markdown = (props: IProps) => {
	return <div>{parser(marked(props.markdown))}</div>;
};

export default Markdown;
