// controllers/postController.js
const Post = require("../models/post");

const createPost = async (req, res, next) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            author: req.user._id
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        next(err);
    }
};

const getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find().populate("author", "username");
        res.json(posts);
    } catch (err) {
        next(err);
    }
};
const getPost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id).populate("author", "username");
        if (!post) return res.status(404).send("Post not found");
        res.json(post);
    } catch (err) {
        next(err);
    }
};

const updatePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) return res.status(404).send("Post not found");
        res.json(post);
    } catch (err) {
        next(err);
    }
};

const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).send("Post not found");
        res.send("Post deleted");
    } catch (err) {
        next(err);
    }
};

module.exports= {createPost,getPosts,getPost,updatePost,deletePost}
