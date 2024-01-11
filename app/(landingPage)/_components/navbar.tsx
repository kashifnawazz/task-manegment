//This Navbar for lnading Page. 

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import  Link from "next/link";

import SignUpPage from "@/app/signup/page";

 export const Navbar = () => {
    return (
            <div className=" flex-auto w-full h-16 bg-header-blue flex items-center"> 
        <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
            <Logo/>

        </div>
            </div>
    );

};

