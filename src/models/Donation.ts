import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        amount: Number,
        message: String,
        paymentId: String,
        orderId: String,
    },
    {
        timestamps: true,
    }
);

export const Donation =
    mongoose.models.Donation ||
    mongoose.model("Donation", donationSchema);