import { Db, MongoClient } from 'mongodb';

const mongoUri = process.env.MONGO_URI as string;
const client = new MongoClient(mongoUri);

let dbConnection: Db;
const dbName = 'one-page';

const connectToServer = () => {
    client.connect((err, db) => {
        if (err || !db) {
            console.error('Error connecting to MongoDB instance.');
            console.error(err);
            throw new Error('Cannot connect to the DB');
        }

        dbConnection = db.db(dbName);
        console.log('Successfully connected to MongoDB instance.');
    });
};

const getDb = () => {
    return dbConnection;
};

export {
    connectToServer,
    getDb
};
