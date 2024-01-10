//This Navbar for lnading Page. 

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import  Link from "next/link";
import SignInPage from "@/app/sign-In/Page";
import SignUpPage from "@/app/signup/page";

 export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm
         flex items-center bg-blue-500">

           <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between"> 
           <Logo/>
           <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
            <Button size ="sm" variant = "outline" asChild>
                <Link href = "/sign-in">
                Login
                </Link>
                </Button>

                <Button>
                    <Link href ="/signup">
                    SignUp
                    </Link>
                </Button>


           </div>

           </div>
        </div>
    );

};

