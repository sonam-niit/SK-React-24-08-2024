// routes/postRoutes.js
const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createPost, getPosts, getPost, getAuthorPosts, updatePost, deletePost } = require("../controllers/postController");

const router = express.Router();

router.post("/posts", authMiddleware, createPost);
router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.get('/author', authMiddleware, getAuthorPosts); // Fetch author’s posts
router.put("/posts/:id", authMiddleware, updatePost);
router.delete("/posts/:id", authMiddleware, deletePost);

module.exports = router;
