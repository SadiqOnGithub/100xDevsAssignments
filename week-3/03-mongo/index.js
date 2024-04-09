const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const { default: mongoose } = require('mongoose');
const { dbConnect } = require('./db');

dbConnect();

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 3000;

mongoose.connection.once("open", () => {
  console.log("mongoDB connected");
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.error(err.MongoParseError);
})


