import Link from "next/link";
import ProjectTableview from "@/app/dashboard/projects/projectTable";
import ProjectTable from "@/app/dashboard/projects/page";

export default function UserDashboard () {
    return (
        <div className=" bg-[#5175DB] flex-col flex place-items-center h-screen w-64">
            <div className="pt-20 text-neutral-50 text-2xl font-bold place-items-center" >
                <div>
            Dashboard
            </div>
             </div>

             <div className="flex-row shadow-md 
             p-10 font-bold w-full h-auto
              hover:bg-sky-700 
               hover:text-white
               ">
                <Link href ="/dashboard/projects">
                    Projects
                </Link>
                </div>

             <div className=" shadow-md bg-button-color
              w-full h-auto p-4 gap-y-2
               hover:bg-sky-500 font-bold
                hover:text-white
                self-center">
                <Link href = "/app/dashboard/projects">
                  Edit User
                 </Link>
                 </div>

                 <div className=" shadow-md bg-button-color 
                 w-full h-auto p-4 gap-y-2
                  hover:bg-white font-bold">
                <Link href = "/app/dashboard/projects">
                  PlaceHolder
                 </Link>
                 </div>

                 <div className=" shadow-md bg-button-color 
                 w-full h-auto p-4 gap-y-2
                  hover:bg-white font-bold ">
                <Link href = "/app/dashboard/projects">
                 PlaceHolder
                 </Link>
                 </div>

                 <div className=" shadow-md bg-button-color
                  w-full h-auto p-4 gap-y-2
                   hover:bg-white font-bold ">
                <Link href = "/app/dashboard/projects">
                 PlaceHolder
                 </Link>
                 </div>

                 <div className=" shadow-md bg-button-color
                  w-full h-auto p-4 gap-y-2 hover:bg-white font-bold ">
                <Link href = "/app/dashboard/projects">
                  PlaceHolder
                 </Link>
                 </div>

                 <div className=" shadow-md bg-button-color w-full h-auto
                  p-4 gap-y-2 hover:bg-white font-bold ">
                <Link href = "/app/dashboard/projects">
                  PlaceHolder
                 </Link>
                 </div>

         
            
             
            
        </div>
    )
}