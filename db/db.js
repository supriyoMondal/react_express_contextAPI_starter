const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //mongo uri from local env variable
        await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        });
        console.log('mongoDB connected');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;