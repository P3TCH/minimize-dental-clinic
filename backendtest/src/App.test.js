const express = require("express");
const app = express();

app.get("18.208.178.121:8080/", (req, res) => {
  res.status(200).send("Hello World!");
});

module.exports = app;
