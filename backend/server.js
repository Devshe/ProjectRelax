require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const activitiyRoutes = require("./routes/activities");

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes react request route handler
app.use("/api/activities", activitiyRoutes);

//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    console.log("connected to database");
    app.listen(process.env.PORT, () => {
      console.log("Connected to db Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
