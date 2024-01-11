'use client'
//This is also root page
import { Provider } from "react-redux";
import { store } from "../store";
import { Button } from "@/components/ui/button";
import Counter from "../counterTest";

import Link from "next/link";

const MainLandingPage = () => {
    return (
        <div> 
            Hello world
            <Counter></Counter>

      
        
        </div>

        

        
       )
}

export default MainLandingPage;