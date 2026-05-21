import { User } from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import UsersClient from "../userclient/page";
export default async function Users(){
    const session=await getServerSession(authOptions)
    if(!session){
        return <div>
            not logged in
        </div>
    }
    const users=await User.find({
        _id:{$ne:session.user.id}
    }).select("username email");
    
    return <UsersClient users={JSON.parse(JSON.stringify(users))} />
}