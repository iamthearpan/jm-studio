import mongoose, { Schema } from "mongoose";

const paymentMethodSchema = new Schema(
    {
        id: { type: Number, required: true, unique: true },
        name: { type: String, required: true }
    }
);

export const PaymentMethod = mongoose.model("PaymentMethod", paymentMethodSchema);