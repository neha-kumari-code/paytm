
import Image from "next/image";
import { connectDB } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Account } from "@/models/Account";
export default async function Balance() {
  await connectDB();
  const session = await getServerSession(authOptions);

  if (!session) {
   return <div>
    Not Logged In
   </div>
  }

  const account = await Account.findOne({
    userId: session.user.id,
  });

  const bal = account?.balance;

  return (
  
      <div className="">
        <p className="font-semibold text-lg">Your Balance is ₹{bal.toLocaleString("en-IN")}</p>
      </div>
   
  );
}
