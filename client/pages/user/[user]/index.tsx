import React from "react";
import { useRouter } from "next/router";

import MarkdownCard from "@src/components/MarkdownCard";

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
