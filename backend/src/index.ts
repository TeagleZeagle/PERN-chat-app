import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cookieParser()); // for parsing cookies
app.use(express.json()); // for parsing application/json

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

app.listen(PORT, () => {
    console.log("Listening on port " + PORT)
});

// Todo: Add socket.io to the server
// Todo: Configure this server for the deployment