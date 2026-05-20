import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { User } from "@/models/User";
import {z} from 'zod';
import bcrypt from "bcryptjs";
export async function PUT(req:NextRequest){
    try{
        await connectDB();
        const session=await getServerSession(authOptions);
        if(!session){
            return NextResponse.json({
                success:false,
                message:'unauthorized'
            },{status:401})
        }
         const userId=session.user.id;
         const updateSchema=z.object({
            username:z.string().optional(),
            password:z.string().optional(),
            email:z.string().email().optional(),
         })
         const body= await req.json();
         const result=updateSchema.safeParse(body)
         if(!result.success){
            return NextResponse.json({
                success:false,
                message:'error while updating information'
            })
         }
        const updatedData=result.data;
        if(updatedData.password){
            const salt=await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(updatedData.password,salt);
            updatedData.password=hashedPassword;
        }
         const updatedUser=await User.findByIdAndUpdate(
            userId,
            updatedData,
            {new:true}
         ).select("-password");
         return NextResponse.json({
            success:true,
            updatedUser
         })
    }catch(error){
        return NextResponse.json({
            success:false,
            message:`update error ${error}`
        })
    }
}