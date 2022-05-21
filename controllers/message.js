import { RoomModel } from "../models/RoomModel.js";
import { UserTest } from "../models/User.js";
import { UserModel } from "../models/userModel.js";

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

export const getImage = async (req, res) => {
  await UserTest.find().then(data => {
    res.status(200).json({
      message: "User list retrieved successfully!",
      users: data
    });
  });
}

export const updateMessage = async (req, res) => {
  try {
    const url = req.protocol + '://' + req.get('host')
    // const user = new User({
    //     _id: new mongoose.Types.ObjectId(),
    //     name: req.body.name,
    //     profileImg: url + '/public/' + req.file.filename
    // });
    const data = req.body
    const id = data.roomId
    // profileImg: url + '/public/' + req.file.filename
    const message = {
      "sender": data.sender,
      "image": req.file.filename,
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