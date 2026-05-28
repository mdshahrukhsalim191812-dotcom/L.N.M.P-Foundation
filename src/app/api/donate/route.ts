import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Donation } from "@/models/Donation";

export async function GET() {
    try {
        await connectDB();

        const donations = await Donation.find().sort({
            createdAt: -1,
        });

        return NextResponse.json({
            success: true,
            donations,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch donations",
            },
            { status: 500 }
        );
    }
}