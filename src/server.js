
const app = require('./app');
const dotenv = require('dotenv');
const DatabaseConnection = require('./config/db');
dotenv.config();
const port = process.env.PORT;

// Connect to MongoDB
DatabaseConnection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})