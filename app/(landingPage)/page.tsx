'use client'

import LoginComponent from "@/components/client-components/login-component";
import { Input } from "@/components/ui/input";

const MainLandingPage = () => {
    return (
        <div> 
           <div className="h-auto w-800 flex-col items-center" >
           <LoginComponent></LoginComponent>
           </div>
        </div>

        

        
       )
}

export default MainLandingPage;