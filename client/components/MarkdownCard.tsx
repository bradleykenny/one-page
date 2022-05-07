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
	
	return (
		<div className="shadow-md bg-white w-6/12 mx-auto rounded-md p-5">
			{parsedMarkdownAsHTML}
		</div>
	);
};

export default MarkdownCard;
