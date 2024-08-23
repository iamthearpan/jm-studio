import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema(
    {
        id: { type: Number, required: true, unique: true },
        paymentId: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        order: { type: Schema.Types.ObjectId, ref: "Order", required: true },
        amount: { type: Number, required: true },
        payment_method: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentSchema);
