import prisma from "@/components/prisma";
import { NextResponse } from "next/server";

export async function GET (req: any) {
    return NextResponse.json({msg: 'test'})
}