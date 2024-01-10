//This is Home Page when User Loged In .
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePageOfUser = ()=> {
    return (
    <div>
       <div className="fixed top-0 w-full h-14 px-4 
       border-b shadow-sm flex item-center
        bg-slate-800">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
            <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
            <Button size ="lg" variant = "outline" asChild>
                <Link href = "/sign-in">
                Logout
                </Link>
                </Button>
                </div>


           </div>
        </div>
    </div>
    );
};

export default HomePageOfUser;