import React from "react";
import parser from "html-react-parser";
import marked from "marked";

import style from "./MarkdownCard.module.css";

interface IProps {
	markdown: string;
}

const MarkdownCard = (props: IProps) => {
	return <div className={style.card}>{parser(marked(props.markdown))}</div>;
};

export default MarkdownCard;
