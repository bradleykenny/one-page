import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { LoginRequest, RegisterRequest } from "../models/Auth";
import MongoService from "./MongoService";

import jwt from "jsonwebtoken";
import { Collection, Document } from "mongodb";

const COLLECTION_NAME = "auth";

const getCollection = (): Collection<Document> => {
	const db = MongoService.getDb();
	return db.collection(COLLECTION_NAME);
};

const login = async (request: LoginRequest, res: Response) => {
	console.log(request);
	const { email, password } = request;

	if (!email || !password) {
		res.status(400).send("Please enter both email and password values");
	}

	const authCollection = getCollection();
	const user = await authCollection.findOne({ email });

	if (!user) {
		res.status(400).send(`No user exists for: ${email}`);
	}

	const passwordsMatch = await bcrypt.compare(password, user?.password);

	if (passwordsMatch) {
		const token = jwt.sign(
			{ username: user?.email },
			process.env.SECRET as string
		);
		res.json({ token });
	} else {
		res.status(400).send("Incorrect username/password");
	}
};

const register = async (request: RegisterRequest, res: Response) => {
	const { email, firstName, lastName, password } = request;

	try {
		if (!email || !firstName || !lastName || !password) {
			res.status(400).send("All fields must be entered.");
		}

		const authCollection = getCollection();

		const existingUser = await authCollection.findOne({ email });
		if (existingUser) {
			res.status(400).send("Email is already registered");
		}

		const encryptedPassword = await bcrypt.hash(password, 10);
		const newUser = { ...request, password: encryptedPassword };

		await authCollection.insertOne(newUser);

		res.status(200).send("User registered");
	} catch (e) {
		console.error(e);
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
					console.log(req.body.user);
					next();
				} else {
					res.status(400).json({
						error: "Token verification failed",
					});
				}
			} else {
				res.status(400).json({ error: "Malformed auth header" });
			}
		} else {
			res.status(400).json({ error: "No authorization header" });
		}
	} catch (error) {
		res.status(400).json({ error });
	}
};

export default {
	login,
	register,
	isLoggedIn,
};
