'use client'
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button";
import Link from "next/link";
import editUser from "./edit-user";


export default function CreateUser() {
    //const [userstate, setUser] = useState(0)

    return (
        <div>
        <div className="bg-white h-765 w-1552 mx-8 my-px-8 drop-shadow-md">
            <p> Create User</p>
            <div className=" grid grid-cols-3 gap-4 place-items-stretch h-40 ">
                <div> <Label htmlFor="label">User Name*</Label><Input></Input></div>
                <div><Label htmlFor="picture">First Name*</Label><Input></Input></div>
                <div><Label htmlFor="picture">Last Name*</Label><Input></Input></div>
                <div><Label htmlFor="picture">Mobile Number*</Label><Input></Input></div>
                <div><Label htmlFor="picture">Email ID*</Label><Input></Input></div>
                <div><Label htmlFor="picture">Role Name*</Label><Input></Input></div>
                <div><Label htmlFor="picture">Password*</Label><Input></Input></div>
                <div><Label htmlFor="picture">Confirm Password*</Label><Input></Input></div>
            </div>

            <div>
                <p>additional Information</p>
            <div className=" grid grid-cols-3 gap-4 place-items-stretch h-40 pt-16 ">
                <div> <Label htmlFor="picture">Building Number*</Label><Input></Input></div>
                <div><Label htmlFor="picture">Street Name*</Label><Input></Input></div>
                <div><Label htmlFor="picture">Counrty*</Label><Input></Input></div>
                <div><Label htmlFor="picture">City*</Label><Input></Input></div>
                <div><Label htmlFor="picture">Postal/Pin Code*</Label><Input></Input></div>
                <div><Label htmlFor="picture">Floor*</Label><Input></Input></div>
                <div><Label htmlFor="picture">Additional Number*</Label><Input></Input></div>
                
            </div>

            </div>
            <div className="p-20">
       <Link href={"/components/client-components/edit-user"}>
        <Button> Submit </Button></Link>
        </div>
        </div>
        
    </div>
    )
}