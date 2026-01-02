const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors');
const router = require('./routes');
const  errorMiddleware  = require('./middlewares/error.middleware');

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/v1', router);

// Global Error Middleware
app.use(errorMiddleware);

app.get("/", (req, res) => {
    res.send("Server is running...");
});


module.exports = app;