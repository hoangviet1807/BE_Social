import { RoomModel } from "../models/RoomModel.js";

export const createRoom = (req, res ) => {
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

export const getRoomUser  = async (req, res) => {
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
    catch(error){
      res.status(500).json({
        error: error
      })
    }
}

export const updateMessage = async (req, res) => {
  try {
    const message = {"message" : 'OK ne', "sender": 'han', "timestamps": '12h51' };
    await RoomModel.findOneAndUpdate(
      { _id: "6280b20e211a24383adf0082"}, 
      { $push: { 
                messages : message
              } 
      })
    res.status(200).json({"Message": "Updated"})
  }
    catch(error){
      res.status(500).json({
        error: "loi ne"
      })
    }

}
