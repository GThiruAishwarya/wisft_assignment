import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'node_assignment';

let db: any;

export const connectDB = async () => {
    const client = new MongoClient(url);
    await client.connect();
    db = client.db(dbName);
};

export const getDB = () => db;
