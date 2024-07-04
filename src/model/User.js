const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      minLength: [3, "Minimum length of username is 3"],
      maxLength: [20, "Maximum length of username is 20"],
      required: [true, 'Name is required']
    },
    email: {
      type: String,
      required: [true, "Email is required"]
    },
    password: {
      type: String,
      minLength: [8, "Password needs to minimum 8 characters"],
      required: [true, "Password is required"]
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["pending", "approved", "declined", "blocked"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    id: true,
  }
);

const User = model("User", UserSchema);

module.exports = User;
