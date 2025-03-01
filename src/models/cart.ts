import mongoose, { Schema, Document } from "mongoose";

export interface ICart extends Document {
    user: mongoose.Schema.Types.ObjectId;
    product: mongoose.Schema.Types.ObjectId;
    quantity: number;
}

const CartSchema: Schema = new Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true, min: 1 },
    },
    { timestamps: true }
);

export default mongoose.model<ICart>("Cart", CartSchema);
