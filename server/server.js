const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World -  Service is Running!");
});

app.listen(port, () => {
  console.log(`Service is running on port ${port}`);
});
