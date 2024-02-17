import { NextFunction, Request, Response } from "express";
import { Collection, Document } from "mongodb";
import { Collections } from "../models/Collections";
import MongoService from "./MongoService";
import OpenAI from "openai";
import { TypedRequestBody } from "../models/Common";

const COLLECTION_NAME = Collections.ai;

const getCollection = (): Collection<Document> => {
  const db = MongoService.getDb();
  return db.collection(COLLECTION_NAME);
};

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const generateMessage = async (
  req: TypedRequestBody<{ prompt: string}>,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req) {
      res.status(500).send("All fields must be entered.");
    }

    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: req.body.prompt }],
      model: "gpt-3.5-turbo",
      stream: true,
    });

    let total = '';
    for await (const chunk of completion) {
      if (chunk.choices[0].finish_reason === 'stop') {
        break;
      }
  
      res.write(chunk.choices[0].delta.content);
    }
    
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export default { generateMessage };
