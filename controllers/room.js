import { RoomModel } from "../models/RoomModel.js";

export const createRoom = (req, res) => {
  try {
    const newRoom = req.body;
    const room = new RoomModel(newRoom)
    room.save()
    res.status(200).json({ "message": "Created room successfully" })
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
}

export const getRoomUser = async (req, res) => {
  try {
    const user = req.params.username
    const rooms = await RoomModel.find({
      "members": {
        $in: [
          user
        ]
      }
    })
    res.status(200).json(rooms)
  }
  catch (error) {
    res.status(500).json({
      error: error
    })
  }
}

export const updateMessage = async (req, res) => {
  try {
    const data = req.body
    let message = {}

    if (data.image) {
      message = {
        "sender": data.sender,
        "timestamps": data.timestamps,
        "image": {
          data: fs.readFileSync(path.join(__dirname + '/uploads/' + data.image)),
          contentType: 'image/png'
        }
      };

    }
    else {
      message = {
        "sender": data.sender,
        "message": data.message,
        "timestamps": data.timestamps
      };
    }

    //   const img = {
    //   data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
    //   contentType: 'image/png'
    // }
    // const message = {
    //   "sender": data.sender,
    //   "message": data.message,
    //   "timestamps": data.timestamps
    // };
    // await RoomModel.findOneAndUpdate(
    //   { _id: id },
    //   {
    //     $push: {
    //       messages: message,
    //     }
    //   })

    console.log(message);
    res.status(200).json({ "Message": message })
  }
  catch (error) {
    res.status(500).json({
      error: "loi ne"
    })
  }
}