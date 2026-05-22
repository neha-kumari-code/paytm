"use client"
import { signIn } from "next-auth/react";
import Button from "@/app/components/button";
import Heading from "@/app/components/heading";
import Input from "@/app/components/input";
import Label from "@/app/components/label";
import { useState } from "react";

import { toast } from "react-toastify";
import {useRouter} from 'next/navigation'
export default function SignIn(){
    const router=useRouter();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const signInHandler=async()=>{
        const res=await signIn("credentials",{
            redirect:false,
            email,
            password
        })
        if(res?.error){
            toast.error("Invalid Credentals")
        }else {
      toast.success("Login successful");
      router.push("/dashboard"); // redirect after login
      router.refresh();
    }
    }
    return <div className="relative overflow-hidden  bg-linear-to-b from-zinc-100 via-gray-50 to-white text-gray-900  flex items-start justify-center bg-gray-50 w-full h-screen py-4">
     <div className="bg-white shadow-[0_0_5px_rgba(0,0,0,0.4)] rounded-md flex flex-col gap-5 w-1/3 px-4 py-3">
            <div className="flex justify-center flex-col items-center">
            <Heading text="Sign In" />
            <p className="text-gray-500">
                Enter your information to be logged in
            </p>
            </div>
             {/* name email password */}
            <div className="flex flex-col gap-1 justify-center items-center">
                <div className="flex flex-col gap-0.5 w-full">
                    <Label text="Email" htmlFor="email" />
                    <Input type="text" placeholder="john@gmail.com" id="email" value={email} onChangeHandler={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                    <Label text="Password" htmlFor="password" />
                    <Input type="password"  id="password" value={password} onChangeHandler={(e)=>setPassword(e.target.value)} eyeIcon={true}/>
                </div>
            </div>
            {/* sign up  button */}
            <div className="flex flex-col justify-center items-center w-full">
                 <Button text="Sign In" onClickHandler={signInHandler}/>
                <p className="text-gray-500">Don't have account? <a className="text-gray-800 underline" href="/signup">Sign Up</a></p>
            </div>
        </div>
    </div>
}