import dbConnect from "@/app/lib/mongodb";
import Item from "@/app/models/Item";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const todos = await Item.find({});
  return NextResponse.json(todos);
}

export async function POST(req) {
  await dbConnect();
  const { name, description } = await req.json();
  const newTodo = await Item.create({ name, description });
  return NextResponse.json(newTodo, { status: 201 });
}