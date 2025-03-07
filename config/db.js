const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const uri = "mongodb+srv://travelTrade:UKirs27SuT7avGz6@cluster0.cd6vky8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectToDatabase() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch (error) {
        console.error('Error when connecting to Mongodb', error);
        process.exit(1);
    }
}


const getDatabase = () => client.db('travelTrade');

module.exports = {
    connectToDatabase,
    getDatabase
}