// Create web server
const express = require("express");
const app = express();

// Create web server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Setup database
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/comments", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Setup body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup CORS
const cors = require("cors");
app.use(cors());

// Setup routes
const comments = require("./routes/comments");
app.use("/api/comments", comments);

// Setup error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});