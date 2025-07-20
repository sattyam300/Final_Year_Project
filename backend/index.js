const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/login";

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// User Schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  userName: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("User", userSchema);

// ROUTES

// Get all users (for testing)
app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

// Register route
app.post("/user/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, userName } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { userName }] });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const newUser = new User({
      firstName,
      lastName,
      email,
      userName,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "✅ Registration successful" });
  } catch (err) {
    res.status(500).json({ message: "❌ Registration failed", error: err.message });
  }
});

// Login route
app.post("/user/login", async (req, res) => {
  try {
    const { userNameorEmail, password } = req.body;

    // Find user by username or email
    const user = await User.findOne({
      $or: [{ userName: userNameorEmail }, { email: userNameorEmail }],
    });

    if (!user) {
      return res.status(404).json({ message: "❌ User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "❌ Incorrect password" });
    }

    res.status(200).json({ message: "✅ Login successful" });
  } catch (err) {
    res.status(500).json({ message: "❌ Login failed", error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
