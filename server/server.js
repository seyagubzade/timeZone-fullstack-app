const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = 8000;
const TimeZoneRouter = require("./routes/timeZone.routes");

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://seyagubzade:seyagubzade123@cluster0.2wwolad.mongodb.net/"
  )
  .then(() => console.log("connected to db"));

app.use("/time-zone", TimeZoneRouter);
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
