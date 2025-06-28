import dbConnect from "@/app/lib/mongodb";
import Blog from "@/app/models/Blog";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const datas = await Blog.find({});
  return NextResponse.json(datas);
}