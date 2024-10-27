// controllers/authController.js
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Register Controller
exports.register = async (req, res, next) => {
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) return res.status(400).json({ message: "Username already exists" });

        // Create a new user
        const newUser = new User({
            username: req.body.username,
            password: req.body.password
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        next(err);
    }
};

// Login Controller
exports.login = async (req, res, next) => {
    try {
        // Check if user exists
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(400).json({ message: "Invalid username or password" });

        // Validate password
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) return res.status(400).json({ message: "Invalid username or password" });

        // Generate JWT token
        const token = jwt.sign({ _id: user._id }, "secretKey", { expiresIn: "1h" });
        res.json({ token, message: "Login successful" });
    } catch (err) {
        next(err);
    }
};
