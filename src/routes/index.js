const express = require('express');
const router = express.Router();
const userRoutes = require('../modules/user/user.routes');

// Define your routes here
router.use("/users", userRoutes);

module.exports = router;