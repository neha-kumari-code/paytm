import { NextRequest,NextResponse } from "next/server";
import validator from 'validator';
import bcrypt from 'bcryptjs'
import { User } from "@/models/User";
export async function POST(req:NextRequest){
    try {
        const {username,password,email}=await req.json();
        if(!username || !password || !email){
            return NextResponse.json({
                success:false,
                message:'missing details'
            })
        }
        if(!validator.isEmail(email)){
            return NextResponse.json({
                success:false,
                message:'write valid email'
            })
        }
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        const detail={
            username,
            password:hashedPassword,
            email
        }
       

    } catch (error) {
        return NextResponse.json({
            success:false,
            messgae:`sign up error ${error}`
        })
    }
}