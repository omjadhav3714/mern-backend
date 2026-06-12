const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

mongoose.connect(process.env.DB_URL)
    .then(() => console.log('DB Connected')); // 3. Create Schema & Model

module.exports = {
    mongoose
}