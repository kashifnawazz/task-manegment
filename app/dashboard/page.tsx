//This is Home Page when User Loged In .
'use client'
import CreateUser from "@/components/client-components/create-user";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import editUser from "@/components/client-components/edit-user";
import UserDashboard from "@/components/client-components/userDashboard";

import { DashBoardNavbar } from "./dashboardComponents/dashboardNav/dash-Nav";



const HomePageOfUser = ()=> {

    const [sidebarOpen, setSidebarOpen] = useState(false);



        return (
         <div>
            <DashBoardNavbar/>
         
                 <UserDashboard/>

                 
                 </div>
                
    );
};

export default HomePageOfUser; 