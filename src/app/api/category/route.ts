import prisma from "@/components/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const category = await prisma.category.findMany();
  return NextResponse.json({
    msg: "get data category",
    data: category,
  });
}

export async function POST(req: NextRequest) {
  const { title, type, image } = await req.json();
  await prisma.category.create({
    data: {
      title,
      type,
      image,
    },
  });
  return NextResponse.json("success");
}

export const DELETE = async (req: NextRequest) => {
  const { id } = await req.json();
  await prisma.category.delete({
    where: {
      id,
    },
  });
  return NextResponse.json("success");
};
