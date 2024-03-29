
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import  Link from "next/link";


//import SignUpPage from "@/app/(views)/signup/page";

 export const DashBoardNavbar = () => {
    return (
      
        <div className="flex-auto w-full h-16 bg-[#5C87B2] flex items-center"> 
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo/>
            </div>
            
            <div>
                <Button>Logout</Button>
            </div>

        
            
            </div>
    );

};