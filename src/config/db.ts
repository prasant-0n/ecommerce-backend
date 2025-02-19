import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging line
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is undefined. Check your .env file.");
        }

        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
};


export default connectDB