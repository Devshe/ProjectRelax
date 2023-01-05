require("dotenv").config();
const express = require("express");

//express app
const app = express();

//middleware
app.use((req, res, next) => {});

//react request route handler
app.get("/", (req, res) => {
  res.json({
    msg: "Hello react",
  });
});

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("Listening on port 4000");
});
