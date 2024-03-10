import { Prompt } from "../models/Ai";

export const prompts: {[key: string]: Prompt} = {
    "message": {
        role: "system",
        // content: "You will receive an idea. You are to write some content based on that idea and output it using semantic HTML tags."
        content: "You will receive an idea. You are to write some content based on that idea."
    }
}
