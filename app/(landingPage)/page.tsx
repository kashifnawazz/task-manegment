//This is also root page
import { Provider } from "react-redux";
import { store } from "../store";
import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

const MainLandingPage = () => {
    return (

        <div className="flex items-center justify-center flex-col">
            <div className=" flex items-center justify-center flex-col">
                <div className=" mb-4 flex items-center border shadow-sm p-4
                 bg-amber-100 text-amber-700 rounded-md uppercase">
                    <Medal className=" h-6 w-6 mr-2"/>
                    Task Managment Web App.
                </div>
                <div className="text-5xl text-center text-slate-950 font-extrabold mb-6">
                <h1> Task Manegment App</h1>
                </div>
                <Button className="mt-6" size="lg" asChild>
                    <Link href="/sign-in">
                    Get Started
                    </Link>
                    </Button>
            </div>
        </div>
        

        
       )
}

export default MainLandingPage;