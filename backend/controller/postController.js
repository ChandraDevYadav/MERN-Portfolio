import { Post } from "../models/postModel.js";

// Create a post
export const createPost = async (req, res) => {
  try {
    const { title, description, briefDescription, name, ages, ratingStars } =
      req.body;
    const images = req.files.map((file) => file.filename);

    const post = new Post({
      title,
      description,
      briefDescription,
      name,
      ages,
      images,
      ratingStars,
    });

    await post.save();
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single post
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update a post
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    let post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Update fields
    post.title = req.body.title || post.title;
    post.description = req.body.description || post.description;
    post.name = req.body.name || post.name;
    post.ages = req.body.ages || post.ages;
    post.briefDescription = req.body.briefDescription || post.briefDescription;
    post.ratingStars = req.body.ratingStars || post.ratingStars;

    // Handle image upload if exists
    if (req.files && req.files.length > 0) {
      post.images = req.files.map((file) => file.filename);
    }

    await post.save();
    res.json({ message: "Post updated successfully", post });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
