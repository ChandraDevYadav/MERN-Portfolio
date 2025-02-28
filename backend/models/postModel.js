import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    briefDescription: { type: String, required: true },
    name: { type: String, required: true },
    ages: { type: Number, required: true },
    images: [{ type: String, required: true }], // Array for multiple images
    ratingStars: { type: Number, default: 0, min: 0, max: 5 },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
