const { Schema, model } = require("mongoose");

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      minLength: [5, "Minimum title length will be 5"],
      required: [true, "Article title is required"],
    },
    body: {
      type: String,
    },
    cover: {
      type: String,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    author: {
      type: Schema.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Article = model("Article", ArticleSchema);

module.exports = Article;
