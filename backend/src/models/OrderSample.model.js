import mongoose, { Schema } from "mongoose";

const orderSampleSchema = new Schema(
    {
        id: { type: Number, required: true, unique: true },
        name: { type: String, required: true },
        order: { type: Schema.Types.ObjectId, ref: "Order", required: true },
        link: { type: String, required: true },
        type: { type: String, enum: ["audio", "video"], required: true },
        createdBy: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

export const OrderSample = mongoose.model("OrderSample", orderSampleSchema);