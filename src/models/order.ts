import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
    user: mongoose.Schema.Types.ObjectId;
    status: "pending" | "shipped" | "delivered" | "cancelled";
    totalPrice: number;
    createdAt: Date;
}

const OrderSchema: Schema = new Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        status: {
            type: String,
            enum: ["pending", "shipped", "delivered", "cancelled"],
            default: "pending",
        },
        totalPrice: { type: Number, required: true },
    },
    { timestamps: true }
);

export default mongoose.model<IOrder>("Order", OrderSchema);
