import React from "react";
import { useRouter } from "next/router";
import parser from "html-react-parser";
import marked from "marked";

import MarkdownCard from "../../../components/MarkdownCard";

const User = () => {
	const router = useRouter();
	const { user } = router.query;

	const hardcodedMarkdownWithQueryName = `# Hello, ${user}\nThis is your customised page.`;

	return (
		<div>
			<MarkdownCard markdown={hardcodedMarkdownWithQueryName} />
		</div>
	);
};

export default User;
