const express = require('express');
const connectDB = require('./config/db.js');
const { configDotenv } = require('dotenv');
const morgan = require('morgan');

configDotenv();

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());
app.use(morgan);

// routes- users route
app.use('/api/users', require('./routes/userRoute'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});