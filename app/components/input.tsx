"use client"

import { useState } from "react";

type InputProps={
    type:string;
    placeholder?:string;
    id:string;
    onChangeHandler:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    value:string;
    eyeIcon?:boolean
}
export default function Input({type,placeholder,id,onChangeHandler,value,eyeIcon}:InputProps){
    const [inputType,setInputType]=useState(false)
    return <div className="border border-gray-300 rounded-sm px-1 py-1 text-gray-600 focus-within:ring-2 focus-within:ring-gray-400 focus-within:border-transparent transition-all duration-200 flex justify-between items-center"><input type={eyeIcon ? (inputType ? "text" : "password") : type} id={id} className="outline-none w-95" 
    placeholder={placeholder} onChange={onChangeHandler} value={value}
    />
    {eyeIcon && (
        <button
            type="button"
            className="ml-2 cursor-pointer"
            onClick={()=>setInputType(prev=>!prev)}
        >
            👁️
        </button>
    )}
    </div>
}
