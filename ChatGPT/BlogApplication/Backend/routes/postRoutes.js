// routes/postRoutes.js
const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createPost, getPosts, getPost, updatePost, deletePost } = require("../controllers/postcontroller");

const router = express.Router();

router.post("/posts", authMiddleware, createPost);
router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.put("/posts/:id", authMiddleware, updatePost);
router.delete("/posts/:id", authMiddleware, deletePost);

module.exports = router;
