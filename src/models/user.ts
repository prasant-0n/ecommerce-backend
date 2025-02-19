import mongoose, { Schema, Document, Types } from "mongoose";

export interface IUser extends Document {
    _id: Types.ObjectId,
    name: string;
    email: string;
    password: string;
    role: "customer" | "admin" | "vendor";
    createdAt: Date;
}

const UserSchema: Schema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["customer", "admin", "vendor"], default: "customer" },
    },
    { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
