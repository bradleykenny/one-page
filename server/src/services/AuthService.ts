import { Response } from 'express';
import {
    LoginRequest,
    RegisterRequest
} from '../models/Auth';
import { MongoService } from '../services';

import jwt from 'jsonwebtoken';

const COLLECTION_NAME = 'auth';

const login = (request: LoginRequest, res: Response) => {

}

const register = async (request: RegisterRequest, res: Response) => {
    const {
        email,
        firstName,
        lastName,
        password
    } = request;
    
    try {
        if (!email || !firstName || !lastName || !password) {
            res.status(400).send('All fields must be entered.');
        }

        const db = MongoService.getDb();
        const authCollection = db.collection(COLLECTION_NAME);

        const existingUser = await authCollection.findOne({ email });
        if (existingUser) {
            res.status(400).send('Email is already registered');
        }

        await authCollection.insertOne(request);

        const token = jwt.sign(request, 'test', { expiresIn: '2h'});

        res.send(200).send('User registered.');
    } catch (e) {
        console.error(e);
    }
}

export default {
    login,
    register
}
