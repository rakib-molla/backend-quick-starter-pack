const express = require('express');
const { getAllUsersController, createUserController } = require('./user.controller');
const router = express.Router();


// user routes 
router.get("/", getAllUsersController);
router.post("/", createUserController);

module.exports = router;