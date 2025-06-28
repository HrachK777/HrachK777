import dbConnect from "@/app/lib/mongodb";
import Blog from "@/app/models/Blog";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { id } = params;
    await dbConnect();

    if (!id) {
        return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
    }

    try {
        const data = await Blog.findById(id);

        if (!data) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to get Blog" },
            { status: 500 }
        );
    }
}
