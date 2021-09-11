import React, { useState } from "react";
import { useRouter } from "next/router";
import axios, { AxiosResponse } from "axios";

import MarkdownCard from "../../../components/MarkdownCard";

const User = () => {
	const router = useRouter();
	const { user } = router.query;

	const hardcodedMarkdownWithQueryName = `# Hello, ${user}\nThis is your customised page.`;

	return (
		<div>
			{"why isnt this showing, " + name}
			<h1>Hello</h1>
			<MarkdownCard markdown={hardcodedMarkdownWithQueryName} />
		</div>
	);
};

export default User;
