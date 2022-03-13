import parser from "html-react-parser";
import marked from "marked";
import React from "react";
import style from "./MarkdownCard.module.css";

interface IProps {
	markdown: string;
}

const MarkdownCard = (props: IProps) => {
	const markdownContent = marked(props.markdown);
	const parsedMarkdownAsHTML = parser(markdownContent);
	return <div className={style.card}>{parsedMarkdownAsHTML}</div>;
};

export default MarkdownCard;
