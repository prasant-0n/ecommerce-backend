import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import connectDB from "./config/db";
import dotenv from 'dotenv';


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));

// Connect to database
connectDB();

// Routes
app.get("/", (req, res) => {
    res.send("API is running...");
});

export default app;
