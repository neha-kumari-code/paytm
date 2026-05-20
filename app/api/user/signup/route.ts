import { NextRequest,NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { User } from "@/models/User";
import { connectDB } from "@/lib/db";
import {z} from 'zod';
import { Account } from "@/models/Account";
export async function POST(req:NextRequest){
    try {
        await connectDB();
        const signupSchema=z.object({
            username:z.string().min(3),
             email: z.string().email(),
            password: z.string().min(6)
        });
        const body=await req.json();
       const result=signupSchema.safeParse(body)
            if (!result.success) {
            return NextResponse.json({
                success: false,
                message: "Invalid input",
                error: result.error.format()
            }, { status: 400 });
        }
        const { username, email, password } = result.data;
        const isExist=await User.findOne({email});
        if(isExist){
            return NextResponse.json({
                success:false,
                message:'user already exist'
            },
            {status:400})
        }
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        const detail={
            username,
            password:hashedPassword,
            email
        }
       const user=await  User.create(detail);
       await Account.create({
        userId:user._id,
        balance:Math.floor(Math.random()*10000)+1000
       })
       return NextResponse.json({
        success:true,
        message:'signup successful!'
       },
        {status:201})

    } catch (error) {
        return NextResponse.json({
            success:false,
            message:`sign up error ${error}`
        },{status:500})
    }
}