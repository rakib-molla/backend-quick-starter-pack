const express = require('express');
const { getAllUsers } = require('./user.controller');
const router = express.Router();


// Define your routes here
router.get("/", getAllUsers);

module.exports = router;