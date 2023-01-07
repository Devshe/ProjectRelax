require("dotenv").config();

const express = require("express");
const activities = require("./routes/activities");

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes react request route handler
app.use("/api/activities", activities);

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
