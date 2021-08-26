const express = require("express");
const logger = require("morgan");
const routes = require("./routes/index");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/htmlRoutes");

// require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreatedIndex: true,
  useUnifiedTopology: true
});

// routes
app.use("/api", routes);
app.use("/", htmlRoutes)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});