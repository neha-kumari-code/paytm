import { connectDB } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { Account } from "@/models/Account";


export async function POST(req:NextRequest){
    try {
        await connectDB();
        const authSession=await getServerSession(authOptions);
        if(!authSession){
            return NextResponse.json({
                success:false,
                message:'unauthorized'
            })
        }
        const userId=authSession.user.id;
        const {amount,to}=await req.json();
         if (amount <= 0) {
            return NextResponse.json(
                {
                success: false,
                message: "Invalid amount",
                },
                { status: 400 }
            );
        }
        const session=await mongoose.startSession();
        session.startTransaction();
        // fetching the account 
        const account=await Account.findOne({userId}).session(session);;
        if(!account || account.balance<amount){
            await session.abortTransaction();
            return NextResponse.json({
                success:false,
                message:'insufficient balance'
            })
        }
        const toAccount=await Account.findOne({userId:to}).session(session);;
        if(!toAccount){
            await session.abortTransaction();
            return NextResponse.json({
                success:false,
                message:'Invalid account'
            })
        }
        // perform the transfer
        await Account.findOneAndUpdate({userId},{
            $inc:{
                balance:-amount
            }
        }).session(session)
        await Account.findOneAndUpdate({userId:to},{
            $inc:{
                balance:amount
            }
        }).session(session)
        // commit the transaction
        await session.commitTransaction();
        session.endSession();
        return NextResponse.json({
            success:true,
            message:'Transfer successful'
        })
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:`error while transfer ${error}`
        })
    }
}