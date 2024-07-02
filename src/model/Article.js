const { Schema, model } = require("mongoose");

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Article title is required"],
    },
    body: {
      type: String,
      required: [true, "Article description or body is required"],
    },
    cover: {
      type: String,
    },
    status: {
      type: String,
      enum: {
        values: ["draft", "published"],
        message: `Status can only be "draft" or "published"`,
      },
      default: "draft",
    },
    author: {
      type: Schema.ObjectId,
      ref: "User",
      required: [true, "Author is required"],
    },
    comment: {
      type: Schema.ObjectId,
      ref: "Comment",
    },
  },
  {
    timestamps: true,
  }
);

const Article = model("Article", ArticleSchema);

module.exports = Article;
