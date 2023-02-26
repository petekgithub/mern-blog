const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://blog:LZazom05mX4D5j1e@cluster0.e9tva6e.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password,
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(4000);

// username: blog password: LZazom05mX4D5j1e
// mongodb+srv://blog:LZazom05mX4D5j1e@cluster0.e9tva6e.mongodb.net/?retryWrites=true&w=majority
