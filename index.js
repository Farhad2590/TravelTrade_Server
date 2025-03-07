const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 9000
const app = express()
const userRoute = require('./routes/userRoute');
const { connectToDatabase } = require('./config/db');

app.use(cors())
app.use(express.json())

connectToDatabase()

app.use('/', userRoute);

app.get('/', (req, res) => {
    res.send('server is running')
})

app.listen(port, () => {
    console.log(`the server is running on ${port}`);
})