import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    try {
        await connectDB();
        const searchParam=req.nextUrl.searchParams;
        const query=searchParam.get("query");
        if(!query){
            return NextResponse.json([]);
        }
        const users=await User.find({
            username:{
                $regex:query,// pattern matching
                $options:"i",// case insensitive
            },
        }).select("username email")
        return NextResponse.json({
            success:true,
            users
        },{status:201})
    } catch (error) {
         return NextResponse.json({
            success: false,
            message: "Error searching users",
            });
    }
}