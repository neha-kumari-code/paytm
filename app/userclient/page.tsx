"use client";

import { useRouter } from "next/navigation";
import Button from "../components/button";
import { useState } from "react";

type User = {
  _id: string;
  username: string;
  email: string;
};
export default function UsersClient({ users }: { users: User[] }) {
  const router = useRouter();
    const [search,setSearch]=useState("")
    const filteredUser=users.filter((u)=>u.username.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="flex flex-col">
      <div className="w-full max-w-2xl">

        {/* Header */}
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          Users
        </h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-2 py-2 mb-5 border rounded-sm shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
        />

        {/* User List */}
        <div className="space-y-2">
          {filteredUser.length > 0 ? (
            filteredUser.map((u) => (
              <div
                key={u._id}
                className="flex justify-between items-center bg-white pl-2 rounded-sm shadow-sm
                           hover:shadow-md transition"
              >
                {/* Name */}
                <div className="flex flex-col">
                  <span className="font-medium text-gray-800 text-lg">
                    {u.username}
                  </span>
                </div>

                {/* Button */}
                <div className="shrink-0">
                 <button onClick={()=>router.push(`/sendMoney/${u._id}`)} className="bg-gray-500 cursor-pointer hover:bg-gray-800 text-white font-bold py-2 px-4 border border-gray-700 rounded">
  Send Money
</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No users found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}