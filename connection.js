const express = require("express");
const app = express();
const env = require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes/route"));

// mongoose
//   .connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: "smsdatas", // Add your database name here
//   })
//   .then(() => {
//     console.log("DB Connected");
//   })
//   .catch((err) => {
//     console.error("Error connecting to database:", err);
//   });

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(process.env.PORT, () => {
  console.log(
    "This server run at " + process.env.SERVER + ":" + process.env.PORT
  );
});
