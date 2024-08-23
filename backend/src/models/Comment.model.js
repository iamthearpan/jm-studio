import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
    {
        id: { type: Number, required: true, unique: true },
        orderSample: { type: Schema.Types.ObjectId, ref: "OrderSample", required: true },
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

export const Comment = mongoose.model("Comment", commentSchema);
