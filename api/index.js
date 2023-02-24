const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://blog:LZazom05mX4D5j1e@cluster0.e9tva6e.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  res.json({ requestData: { username, password } });
});

app.listen(4000);

// username: blog password: LZazom05mX4D5j1e
// mongodb+srv://blog:LZazom05mX4D5j1e@cluster0.e9tva6e.mongodb.net/?retryWrites=true&w=majority
