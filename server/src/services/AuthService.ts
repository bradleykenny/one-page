import bcrypt from "bcrypt";
import { Response } from "express";
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
		const token = jwt.sign({}, "SECRET");
		return res.status(200).send({ token });
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

		request.password = await bcrypt.hash(password, 10);

		await authCollection.insertOne(request);

		// TODO: do something with this
		const token = jwt.sign(request, "test", { expiresIn: "2h" });

		res.send(200).send("User registered");
	} catch (e) {
		console.error(e);
	}
};

export default {
	login,
	register,
};
