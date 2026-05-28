import { NextResponse } from "next/server";
import { razorpay } from "@/lib/razorpay";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const options = {
            amount: Number(body.amount) * 100,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json(order);
    } catch (error) {
        console.log(error);

        return NextResponse.json(
            { error: "Failed to create order" },
            { status: 500 }
        );
    }
}