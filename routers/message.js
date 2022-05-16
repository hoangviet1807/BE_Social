import express from "express";
import { getMessage, updateMessage } from "../controllers/message.js";

const router = express.Router();
router.get("/:id", getMessage);
router.put("/:id", updateMessage)

export default router;
