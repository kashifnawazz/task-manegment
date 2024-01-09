import { Button } from "./ui/button";
import { Logo } from "./logo";
import  Link from "next/link";
import SignInPage from "@/app/sign-In/signInPage";

 export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm
         flex items-center bg-blue-500">

           <div className=" md:max-w-screen-2xl mx-auto flex items-center w-full justify-between"> 
           <Logo/>
           <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
            <Button size ="sm" variant = "outline" asChild>
                <Link href = "/signInPage">
                Login
                </Link>
                </Button>

                <Button>
                    SignUp
                </Button>


           </div>

           </div>
        </div>
    );

};
