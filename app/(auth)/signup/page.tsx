"use client"
import Button from "@/app/components/button";
import Heading from "@/app/components/heading";
import Input from "@/app/components/input";
import Label from "@/app/components/label";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
export default function signUp(){
    const router=useRouter()
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const signUpHandler=async()=>{
        try {
            const {data}=await axios.post("/api/user/signup",{
                username,email,password
            })
                toast.success(data.message);
                router.push('/signin')
        } catch (error: any) {
        toast.error(
            error.response?.data?.message
        )
        console.log(error)
    }
    }
    return <div className="bg-white shadow-[0_0_5px_rgba(0,0,0,0.4)] rounded-md flex flex-col gap-5 w-1/2 px-4 py-3">
            <div className="flex justify-center flex-col items-center">
            <Heading text="Sign Up" />
            <p className="text-gray-500">
                Enter your information to create an account
            </p>
            </div>
             {/* name email password */}
            <div className="flex flex-col gap-1 justify-center items-center">
                <div className="flex flex-col gap-0.5 w-full">
                    <Label text="Name" htmlFor="name" />
                    <Input type="text" placeholder="john" id="name" value={username} onChangeHandler={(e)=>setUsername(e.target.value)} />
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                    <Label text="Email" htmlFor="email" />
                    <Input type="text" placeholder="john@gmail.com" id="email" value={email} onChangeHandler={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                    <Label text="Password" htmlFor="password" />
                    <Input type="password"  id="password" value={password} onChangeHandler={(e)=>setPassword(e.target.value)} />
                </div>
            </div>
            {/* sign up  button */}
            <div className="flex flex-col justify-center items-center w-full">
                 <Button text="Sign Up" onClickHandler={signUpHandler}/>
                <p className="text-gray-500">Already have an account? <a className="text-gray-800 underline" href="/signin">Sign in</a></p>
            </div>
        </div>
    
}