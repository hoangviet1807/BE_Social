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
          default: ""
        },
        sender: {
          type: String,
        },
        timestamps: {
          type: String
        },
        image: {
          data: Buffer,
          contentType: String,
          default: ""
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
