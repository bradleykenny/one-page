import { Page } from "../models/Page";
import MongoService from "./MongoService";

const COLLECTION_NAME = 'pages';

const addPage = async (page: Page) => {
    const db = MongoService.getDb();
    const coll = db.collection(COLLECTION_NAME);
    await coll.insertOne(page);
};

export default {
    addPage
};
