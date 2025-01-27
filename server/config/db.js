const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/myEcommerceDatabase", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Add any other options as needed
        });
        console.log("MongoDB Connected: ", conn.connection.host);
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
