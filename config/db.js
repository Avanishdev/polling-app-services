const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
};

module.exports = connectDb;