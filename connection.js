const express = require("express");
const app = express();
const env = require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes/route"));

mongoose.connect(process.env.DATABASE).then(() => {
  console.log("DB Connected");
});

app.listen(process.env.PORT, () => {
  console.log(
    "This server run at " + process.env.SERVER + ":" + process.env.PORT
  );
});
