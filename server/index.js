require("dotenv").config();
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dataRouter = require("./routes/Data.router");
const path = require("path");

server.use(express.static(path.resolve(__dirname, "build")));

async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("database connected");
}

server.use(cors());
server.use(express.json()); // to parse req.body
server.use("/data", dataRouter.router);

connectDB().catch((err) => {
  console.log(err);
});

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

server.listen(process.env.PORT, () => {
  console.log("server started");
});

//middlewares
