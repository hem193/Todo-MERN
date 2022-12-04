const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to our todos api...");
});

const connection_string = process.env.CONNECTION_STRING;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});

mongoose
  .connect(connection_string, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
