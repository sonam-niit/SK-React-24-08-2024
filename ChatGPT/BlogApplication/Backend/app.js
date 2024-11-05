// app.js
const express = require("express");
const mongoose = require("mongoose");
const cors= require('cors');
const dotenv= require('dotenv');
dotenv.config()
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URI);

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/postRoutes"));
app.use(errorMiddleware); // Add error middleware at the end

app.listen(3000, () => console.log("Server running on port 3000"));
