import React from "react";
import { useRouter } from "next/router";
import parser from "html-react-parser";
import marked from "marked";

const User = () => {
	const router = useRouter();
	const { user } = router.query;

	const hardcodedMarkdownWithQueryName = `# Hello, ${user}\nThis is your customised page.`;

	return <div>{parser(marked(hardcodedMarkdownWithQueryName))}</div>;
};

export default User;
