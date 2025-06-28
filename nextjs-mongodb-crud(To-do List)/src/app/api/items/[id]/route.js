import dbConnect from "@/app/lib/mongodb";
import Item from "@/app/models/Item";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    const { id } = params;
    const data = await req.json();
    await dbConnect();

    if (!id) {
        return NextResponse.json({ error: "Todo ID is required" }, { status: 400 });
    }

    try {
        const updatedTodo = await Item.findByIdAndUpdate(
            id,
            data,
            { new: true }
        );

        if (!updatedTodo) {
            return NextResponse.json({ error: "Todo not found" }, { status: 404 });
        }

        return NextResponse.json(updatedTodo);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update todo" },
            { status: 500 }
        );
    }
}

export async function DELETE(req, { params }) {
    const { id } = params;
    await dbConnect();

    if (!id) {
        return NextResponse.json({ error: "Todo ID is required" }, { status: 400 });
    }

    try {
        const deletedTodo = await Item.findByIdAndDelete(id);

        if (!deletedTodo) {
            return NextResponse.json({ error: "Todo not found" }, { status: 404 });
        }

        return NextResponse.json(
            { message: "Todo deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete todo" },
            { status: 500 }
        );
    }
}
