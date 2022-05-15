import express from "express";
import { createUser, getUsers, login, searchUser } from "../controllers/users.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.post("/login", login)
router.get("/search", searchUser)

export default router;
