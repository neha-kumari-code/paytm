"use client"
import { signOut } from "next-auth/react";
export default function LogoutBtn(){

    return <div>
        <button onClick={()=>signOut({callbackUrl:"/signin"})} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Logout</button>
    </div>
}