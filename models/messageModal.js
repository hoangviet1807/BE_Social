import mongoose from "mongoose";
const Schema = mongoose.Schema;

const messageModel = new Schema(
  {
    message: {
      type: String,
    },
    sender: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const MessageModel = mongoose.model("Chat", messageModel);
