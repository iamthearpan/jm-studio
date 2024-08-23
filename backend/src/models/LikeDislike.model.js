import mongoose, { Schema } from "mongoose";

const likeDislikeSchema = new Schema(
    {
        id: { type: Number, required: true, unique: true },
        orderSample: { type: Schema.Types.ObjectId, ref: "OrderSample", required: true },
        action: { type: String, enum: ["like", "dislike"], required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

export const LikeDislike = mongoose.model("LikeDislike", likeDislikeSchema);