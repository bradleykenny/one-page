import MarkdownCard from "@src/components/MarkdownCard";
import { useRouter } from "next/router";
import React from "react";

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
