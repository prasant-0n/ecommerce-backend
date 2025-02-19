import mongoose, { Schema, Document } from "mongoose";

export interface IPayment extends Document {
    order: mongoose.Schema.Types.ObjectId;
    amount: number;
    paymentMethod: "card" | "paypal" | "upi";
    status: "pending" | "completed" | "failed";
    createdAt: Date;
}

const PaymentSchema: Schema = new Schema(
    {
        order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
        amount: { type: Number, required: true },
        paymentMethod: { type: String, enum: ["card", "paypal", "upi"], required: true },
        status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
    },
    { timestamps: true }
);

export default mongoose.model<IPayment>("Payment", PaymentSchema);
