import { getServerSession } from "next-auth";
import Balance from "./balance";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { User } from "@/models/User";
import Users from "./users/page";
export default async function Home() {
 const session=await getServerSession(authOptions)
 if(!session){
  return <div>Not Logged In</div>
 }
 const user=await User.findOne({_id:session.user.id}).select("username")
  return (
   <div className="bg-gray-50 flex flex-col gap-2">
      {/*----app bar--- */}
      <div className=" border border-gray-200 flex justify-between p-3">
        <p className="font-semibold text-lg ">payTM App</p>
        <p className="font-semibold text-lg ">Hello {user?.username}</p>
      </div>
      {/*-----balance show---- */}
      <div className="">
        <Balance/>
      </div>
      <div>
        <Users/>
      </div>
   </div>
  );
}
