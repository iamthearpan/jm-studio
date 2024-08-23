import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
    {
        id: { type: Number, required: true, unique: true },
        orderId: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        songName: { type: String, required: true },
        orderedVideo: { type: Boolean, default: false },
        videoDetails: { type: String },
        referanceLink: { type: String },
        status: { type: String, required: true },
        createdBy: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
