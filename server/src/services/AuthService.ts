import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Collection, Document } from "mongodb";
import { v4 as uuidv4 } from "uuid";

import MongoService from "./MongoService";

import { LoginRequest, RegisterRequest } from "../models/Auth";
import { Collections } from "../models/Collections";
import { TypedRequestBody } from "../models/Common";

const COLLECTION_NAME = Collections.auth;

const getCollection = (): Collection<Document> => {
  const db = MongoService.getDb();
  return db.collection(COLLECTION_NAME);
};

const login = async (
  request: TypedRequestBody<LoginRequest>,
  res: Response
) => {
	console.log('req', request);
  const { email, password } = request.body;

  if (!email || !password) {
    res.status(500).send("Please enter both email and password values");
  }

  const authCollection = getCollection();
  const user = await authCollection.findOne({ email });

  console.log("here", user);

  if (!user) {
    res.status(500).send(`No user exists for: ${email}`);
  }

  const passwordsMatch = await bcrypt.compare(password, user?.password);

  if (passwordsMatch) {
    const token = jwt.sign(
      { username: user?.email },
      process.env.SECRET as string
    );

    console.log(token);
    res.json({ token });
  } else {
    res.status(500).send("Incorrect username/password");
  }
};

const register = async (
  request: TypedRequestBody<RegisterRequest>,
  res: Response
) => {
  const { email, firstName, lastName, password } = request.body;

  try {
    if (!email || !firstName || !lastName || !password) {
      res.status(500).send("All fields must be entered.");
    }

    const authCollection = getCollection();

    const existingUser = await authCollection.findOne({ email });
    if (existingUser) {
      res.status(500).send("Email is already registered");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const userId = uuidv4();
    const newUser = {
      ...request.body,
      userId,
      password: encryptedPassword,
    };

    await authCollection.insertOne(newUser);

    const token = jwt.sign(
      { username: newUser?.email },
      process.env.SECRET as string
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      if (token) {
        const secret = process.env.SECRET as string;
        const payload = jwt.verify(token, secret);
        if (payload) {
          req.body.user = payload;
          next();
        } else {
          res.status(500).json({
            error: "Token verification failed",
          });
        }
      } else {
        res.status(500).json({ error: "Malformed auth header" });
      }
    } else {
      res.status(500).json({ error: "No authorization header" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export default { login, register, isLoggedIn };
