// db.js
const { MongoClient } = require('mongodb');

// Connection URL and Database Name
const url = process.env.MONGO_URL || 'mongodb://localhost:27017';
const dbName = 'giftdb';

let dbInstance = null;

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }

    const client = new MongoClient(url);
    
    // Connect to the MongoDB server
    await client.connect();
    
    console.log("Connected successfully to MongoDB server");
    dbInstance = client.db(dbName);
    return dbInstance;
}

module.exports = connectToDatabase;