
import { connectDB } from "@/lib/db";
import { getServerSession } from "next-auth";
import { Account } from "@/models/Account";
import { authOptions } from "../../api/auth/[...nextauth]/route";

import { User } from "@/models/User";
import SendMoneyClient from "@/app/sendMoneyClient/page";
export default async function SendMoney({params}:{params:{id:string}}){
        await connectDB();
        const authSession=await getServerSession(authOptions);
        if(!authSession){
            return <div>
                not logged in
            </div>
        }
        const userId=authSession.user.id;
        const {id} =await params;
        const friend=await User.findOne({_id:id}).select("username")
        return <SendMoneyClient userId={userId} to={id} name={friend?.username} />
    }