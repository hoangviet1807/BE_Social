import { RoomModel } from "../models/RoomModel.js";

export const getMessage = async (req, res) => {
  try {
    const id = req.params.id
    const messages = await RoomModel.find({ "_id": id });
    if (messages.length > 0) {
      res.status(200).json(messages[0]);
    }
    else {
      res.status(400).json({ "message": "group chat does not exist" })
    }
  } catch (error) {
    res.status(402).send(error.Message);
  }
};


export const updateMessage = async (req, res) => {
  try {
    const data = req.body
    const id = data.roomId
    const message = {
      "sender": data.sender,
      "message": data.message,
      "timestamps": data.timestamps
    };
    await RoomModel.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          messages: message
        }
      })
    res.status(200).json({ "Message": "Updated" })
  }
  catch (error) {
    res.status(500).json({
      error: "loi ne"
    })
  }
}