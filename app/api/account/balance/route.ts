import { connectDB } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { Account } from "@/models/Account";
export async function GET(){
    try {
        await connectDB();
        const session=await getServerSession(authOptions);
        console.log("SESSION:", session);
        if(!session){
            console.log("s")
            return NextResponse.json({
                success:false,
                message:'unauthorized'
                },{status:401})
        }
        const userId=session.user.id;
        const account=await Account.findOne({userId});
         if (!account) {
            console.log("A")
            return NextResponse.json(
                {
                success: false,
                message: "Account not found",
                },
                { status: 404 }
            );
        }
        return NextResponse.json({
            success:true,
            balance:account.balance
        })
    } catch (error) {
        console.log("e")
        return NextResponse.json({
            success:false,
            message:`balance check error ${error}`
        })
    }
}