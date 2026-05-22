"use client"

import { useState } from "react";
import Button from "../components/button";
import axios from "axios";
import {toast} from 'react-toastify'
import { useRouter } from "next/navigation";
type sendMoneyProps={
    userId:string;
    to:string;
    name:string
}
export default function SendMoneyClient({userId,to,name}:sendMoneyProps){
    const [amount,setAmount]=useState(0)
    const router=useRouter()
    const Transfer=async()=>{
        const {data}=await axios.post("/api/account/transfer",{userId,to,amount})
        if(data.success){
            toast.success(data.message)
            router.push("/dashboard")
        }else{
            toast.error(data.message)
        }
    }
    return (
        <div  className="w-full h-screen flex justify-center items-start py-4 bg-white">
            <div className="border border-gray-600 rounded-sm bg-gray-50 flex flex-col gap-4 w-1/3 h-1/2 px-3 py-3 shadow-md shadow-gray-500 hover:shadow-xl 
                transition duration-300">
                <h1 className="text-black font-semibold text-lg text-center">
                    Send Money
                </h1>
                <div className="flex gap-2 justify-start items-center">
                    <p className="border flex w-10 h-10 rounded-full bg-gray-500 text-white justify-center items-center">{name?.charAt(0).toUpperCase()}</p>
                    <p className="text-lg text-gray-600 ">{name.toUpperCase()}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-md text-gray-600">Amount (in rupees)</p>
                    <input className="border border-gray-200 rounded-sm outline-none  px-2 py-1 focus:ring-2 focus:ring-black focus:border-transparent text-gray-800" type="number" name="" id="" value={amount} onChange={(e)=>setAmount(Number(e.target.value))} />
                </div>
                <Button text="Initiate Transfer" onClickHandler={Transfer} />
            </div>
            </div>
        )
}