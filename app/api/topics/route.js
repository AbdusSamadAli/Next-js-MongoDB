import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic created" }, { status: 201 });
}
export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}
export async function DELETE(request) {
    try {
      const id = request.nextUrl.searchParams.get("id");
      await connectMongoDB();
      const result = await Topic.findByIdAndDelete(id);
      if (!result) {
        return NextResponse.json({ error: 'Topic not found' }, { status: 404 });
      }
      return NextResponse.json({ message: "Topic deleted" }, { status: 202 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }
