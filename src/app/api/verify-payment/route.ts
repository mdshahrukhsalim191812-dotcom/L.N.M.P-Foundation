import crypto from "crypto";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Donation } from "@/models/Donation";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        } = body;

        const sign = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSign = crypto
            .createHmac(
                "sha256",
                process.env.RAZORPAY_KEY_SECRET as string
            )
            .update(sign.toString())
            .digest("hex");

        const isAuthentic =
            expectedSign === razorpay_signature;

        if (isAuthentic) {
            await connectDB();

            await Donation.create({
                name: body.name,
                email: body.email,
                amount: body.amount,
                message: body.message,
                paymentId: body.razorpay_payment_id,
                orderId: body.razorpay_order_id,
            });

            return NextResponse.json({
                success: true,
                message: "Payment verified successfully",
            });
        } else {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid signature",
                },
                { status: 400 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong",
            },
            { status: 500 }
        );
    }
}