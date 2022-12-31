import { ObjectId } from "mongodb";
import { Page } from "../src/models/Page";

export default [
	{
		_id: new ObjectId("63afcacb5beb759ea7f2d1f2"),
		title: "Oops",
		content: {
			type: "doc",
			content: [
				{
					type: "paragraph",
					content: [
						{
							type: "text",
							text: "Accidentally deleted all the pages... ",
						},
					],
				},
				{
					type: "paragraph",
					content: [
						{
							type: "text",
							marks: [
								{
									type: "strike",
								},
								{
									type: "highlight",
								},
							],
							text: "hidethepain",
						},
					],
				},
			],
		},
		id: "ugNiwomAP",
		userId: "brad@mail.com",
		updatedAt: 1672465099486,
		createdAt: 1672465099486,
	},
	{
		_id: new ObjectId("63afcb115beb759ea7f2d1f3"),
		title: "Another page",
		content: {
			type: "doc",
			content: [
				{
					type: "paragraph",
					content: [
						{
							type: "text",
							text: "Just trying to refill the pages that went missing so I have some content to show off.",
						},
					],
				},
			],
		},
		id: "de05!KJ1i",
		userId: "brad@mail.com",
		updatedAt: 1672465169934,
		createdAt: 1672465169934,
	},
] as Page[];
