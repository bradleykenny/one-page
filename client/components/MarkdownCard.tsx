import parser from "html-react-parser";
import marked from "marked";
import React from "react";
import style from "./MarkdownCard.module.css";
import Button from '@mui/material/Button';

interface IProps {
	markdown: string;
}

const MarkdownCard = (props: IProps) => {
	const markdownContent = marked(props.markdown);
	const parsedMarkdownAsHTML = parser(markdownContent);
	return <div className={style.card}>{parsedMarkdownAsHTML}<Button variant="contained">Press me!</Button></div>;
};

export default MarkdownCard;
