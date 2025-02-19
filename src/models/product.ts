import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    stock: number;
    category: mongoose.Schema.Types.ObjectId;
    createdAt: Date;
}

const ProductSchema: Schema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true, min: 0 },
        category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    },
    { timestamps: true }
);

export default mongoose.model<IProduct>("Product", ProductSchema);
