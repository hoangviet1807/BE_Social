import { MessageModel } from "../models/messageModal.js";

export const getMessage = async (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    const messages = await MessageModel.findOne();
    res.status(200).json(messages);
  } catch (error) {
    res.status(402).send(error.Message);
  }
};
