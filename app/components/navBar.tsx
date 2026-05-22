import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Button from "./button";
import { redirect } from "next/navigation";
import { User } from "@/models/User";
import LogoutBtn from "../logout/page";
import Link from "next/link";
export default async function NavBar(){
    const session=await getServerSession(authOptions)
    let name="";
   if(session?.user?.id){
   const user = await User.findById(session.user.id)
      .select("username");

   name = user?.username || "";
}
    
    return (
    <nav className="
                w-full
                border-b
                border-gray-200
                bg-white
                px-4 md:px-8
                py-4
                flex
                justify-between
                items-center
                shadow-sm
            ">
        {/*---logo---- */}
        <div>
                <h1
                    className="
                        text-xl
                        md:text-2xl
                        font-bold
                        text-gray-600
                    "
                >
                    payTM App
                </h1>
            </div>
        {/*-----right side----- */}
        <div className="flex items-center gap-3 md:gap-5">
           {
            session? (<div className="flex gap-4 justify-center items-center">
                 <p
                                className="
                                    text-lg
                                    md:text-base
                                    text-gray-700
                                     block
                                    font-semibold
                                "
                            >
                                Hello {name.toUpperCase()}!
                            </p>
                <LogoutBtn/>
            </div>)
            : (
                <>
                <Link
                                href="/signin"
                                className="
                                    px-4 py-2
                                    rounded-md
                                    bg-gray-600
                                    text-white
                                    text-sm
                                    hover:bg-gray-700
                                    transition
                                "
                            >
                                Login
                            </Link>

                            <Link
                                href="/signup"
                                className="
                                    px-4 py-2
                                    rounded-md
                                    border
                                    border-gray-600
                                    text-gray-600
                                    text-sm
                                    hover:bg-blue-50
                                    transition
                                "
                            >
                                Signup
                            </Link>
                </>
            )
           }
        </div>
    </nav>)
    
}