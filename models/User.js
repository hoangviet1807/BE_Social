import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    }
})

export const UserTest = mongoose.model("User_test", userSchema);
