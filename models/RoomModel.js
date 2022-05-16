import mongoose from "mongoose";
const Schema = mongoose.Schema;

const roomModel = new Schema(
  {
    roomName: {
      type: String,
    },
    members: {
      type: Array,
      default: []
    },
    messages: {
      type: [{
        message: {
          type: String,
        },
        sender: {
          type: String,
        },
        timestamps: {
          type: String
        }
      }],
      default: []
    },
  },
  {
    timestamps: true,
  }
);

export const RoomModel = mongoose.model("Room", roomModel);
