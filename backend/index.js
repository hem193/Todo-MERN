const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to our todos api...");
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
