import mongoose from "mongoose";

const userschema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        avatar: { type: String, default: '' },
    },{timestamps: true}
);

export default mongoose.model('User',userschema);