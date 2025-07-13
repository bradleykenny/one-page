import { Prompt } from "../models/Ai";

export const prompts: {[key: string]: Prompt} = {
    "generate_idea": {
        role: "system",
        // content: "You will receive an idea. You are to write some content based on that idea and output it using semantic HTML tags."
        content: "You will receive an idea. You are to write some content based on that idea."
    },
    "generate_article": {
        role: "system",
        content: "You will receive an idea. You are to generate an article about it. This should be output as JSON in the following format: { title: string, body: string } where the body is a string formatted in semantic HTML tags."
    }
}
