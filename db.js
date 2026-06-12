const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/workshop')
    .then(() => console.log('DB Connected')); // 3. Create Schema & Model

module.exports = {
    mongoose
}