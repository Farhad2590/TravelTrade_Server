const { getDatabase } = require("../config/db")


const getUser = async (req, res) => {
    const db = getDatabase()
    const userCollection = db.collection('travelTradeUser')
    const userData = await userCollection.find().toArray()
    res.send(userData)
}
const postUser = async (req, res) => {
    const db = getDatabase();
    const userCollection = db.collection('travelTradeUser');
    const userData = req.body;
    const result = await userCollection.insertOne(userData);
    return result;
};

const getUserByEmail = async (req, res) => {
    const db = getDatabase();
    const userCollections = db.collection('travelTradeUser');
    const userEmail = req.params.email;
    const userData = await userCollections.findOne({ email: userEmail });
    res.send(userData);
};



module.exports = {
    getUser,
    getUserByEmail,
    postUser,
};