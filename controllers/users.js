import { UserModel } from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const user = await UserModel.find({
      username: newUser.username,
    });
    if (user.length > 0) {
      res.status(400).json({ "message": "Username already exist" });
    }
    else {
      let user = new UserModel(newUser)
      user.save()
      res.status(200).json({ "message": "Create account successfully" })
    }
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

export const login = async (req, res) => {
  try {
    const account = req.body;
    const user = await UserModel.find({
      username: account.username,
      password: account.password,
    });
    if (user) {
      res.status(200).json("login successfully")
    }
  }
  catch (error) {
    res.status(500).json({
      error: error,
    });
  }
}


export const searchUser = async (req, res) => {
  try {
    const query = { $text: { $search: "vi" } };
    const cursor = UserModel.find(query);
    res.status(200).json(cursor)
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};