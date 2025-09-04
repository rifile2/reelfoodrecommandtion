const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(" MongoDB connected...");
    } catch (err) {
        console.error(" MongoDB connection error:", err.message);
        process.exit(1); // optional: process band kar de agar DB connect na ho
    }
};

module.exports = connectDB;