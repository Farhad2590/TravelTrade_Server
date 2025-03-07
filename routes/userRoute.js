const express = require("express");
const { getUser } = require("../controller/userController");
const { getUserByEmail } = require("../controller/userController");
const { postUser } = require("../controller/userController");


const router = express.Router();

router.get('/users', getUser)
router.get('/users/:email', getUserByEmail)
router.post('/user',postUser)


module.exports = router;