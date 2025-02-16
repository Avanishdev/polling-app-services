require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const connectDb = require("./config/db");
const { initializeSocket } = require("./config/socket");
const apiRoute = require("./routes/api");
const errorHandler = require("./middlewares/error.middleware");

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);

const corsOptions = {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
    return res.json({ message: "Welcome to Scalable Polling App" });
});

connectDb();

app.use("/api/v1", apiRoute);

app.use(errorHandler);

initializeSocket(server);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = server;
