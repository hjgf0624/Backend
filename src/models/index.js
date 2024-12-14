require('dotenv').config();

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB 연결됨: ${conn.connection.host}');
    } catch (err) {
        console.error('에러메시지 : ${err.message}');
        process.exit(1);
    }
};

module.exports = connectDB;