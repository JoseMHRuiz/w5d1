const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    slackID: String,
    accessToken: String
  },
  {
    timestamps: {
      createdAt: "created_at"
    }
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
