import { Page } from "../models/Page";
import MongoService from "./MongoService";

const collectionName = 'pages';

const addPage = async (page: Page) => {
    const db = MongoService.getDb();
    const coll = db.collection(collectionName);
    await coll.insertOne(page);
};

export default {
    addPage
};
