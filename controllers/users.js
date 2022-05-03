import { UserModel } from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const user = new UserModel(newUser);
    await user.save();
    res.status(200).json({ "message:": "Created user" });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
