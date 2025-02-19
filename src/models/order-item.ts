import mongoose, { Schema, Document } from "mongoose";

export interface IOrderItem extends Document {
    order: mongoose.Schema.Types.ObjectId;
    product: mongoose.Schema.Types.ObjectId;
    quantity: number;
    price: number;
}

const OrderItemSchema: Schema = new Schema(
    {
        order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true },
    },
    { timestamps: true }
);

export default mongoose.model<IOrderItem>("OrderItem", OrderItemSchema);
