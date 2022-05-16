import express from "express";
import { createRoom, getRoomUser, updateMessage } from "../controllers/room.js";

const router = express.Router();
router.get("/:username", getRoomUser)
router.post("/", createRoom);
router.put('/', updateMessage)

export default router;
