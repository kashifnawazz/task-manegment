//This is Home Page when User Loged In .

import CreateUser from "@/components/client-components/create-user";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import editUser from "@/components/client-components/edit-user";

const HomePageOfUser = ()=> {


        return (
            <div>
       <div className="h-auto w-auto flex-auto p-40">
       <CreateUser/>
        
       </div>
              
        <div className="p-30">
       <Link href={"edit-user"}>
        <Button variant={"outline"}> Cancel </Button></Link>
        </div>
       </div>
    );
};

export default HomePageOfUser;