
import Balance from "@/app/balance";
import Users from "@/app/users/page";
export default async function Home() {
 
  return (
   <div className="relative overflow-hidden  bg-linear-to-b from-zinc-100 via-gray-50 to-white text-gray-900  flex items-start justify-center bg-gray-50 w-full h-screen p-2">
      <div className="flex flex-col justify-center items-center w-1/2">
      {/*-----balance show---- */}
      <div className="text-gray-800 w-full">
        <Balance/>
      </div>
      <div className="w-full">
        <Users/>
      </div>
      </div>
   </div>
  );
}
