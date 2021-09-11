import React, { useState } from "react";
import { useRouter } from "next/router";
import axios, { AxiosResponse } from "axios";

import MarkdownCard from "../../../components/MarkdownCard";

const User = () => {
	const router = useRouter();
	const { user } = router.query;

	const [name, setName] = useState("");

	const hardcodedMarkdownWithQueryName = `# Hello, ${user}\nThis is your customised page.`;

	const result: Promise<AxiosResponse<{ name: string }>> = axios.get(
		"http://localhost:3000/api/hello"
	);
	let something: string = "what";
	result.then((res) => {
		setName(res.data.name);
		console.log(something);
	});

	return (
		<div>
			{"why isnt this showing, " + name}
			<h1>Hello</h1>
			<MarkdownCard markdown={hardcodedMarkdownWithQueryName} />
		</div>
	);
};

export default User;
