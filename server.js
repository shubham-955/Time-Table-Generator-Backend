const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());

const TimeTableRoute = require("./routes/TimeTable");

const connect = () => {
  return mongoose.connect(process.env.MONGOOSE_DB_URL);
};

app.use("/slots", TimeTableRoute);

app.listen(process.env.PORT, async (req, res) => {
  await connect();
  console.log(`Listening on port ${process.env.PORT}`);
});
