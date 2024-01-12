'use client'

import axios from "axios"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { useState } from "react"
import Link from "next/link"

export default function LoginComponent (){


    return (
        <div className="h-auto w-500 flex-auto items-center">
        <div className="h-auto w-200 items-center">
            <div className="w-80">
                <Label htmlFor="picture">UserName</Label>
                <Input type = "email" placeholder="Username" />
            </div>

            <div className="w-80">
            
                <Label htmlFor="picture">Password</Label>
                <Input type = "password" placeholder="Enter Password" />
            </div>
            <Link href="/users">
            <Button type="submit">Login</Button>
            </Link>
            <div> check this out</div>



        </div>
        </div>
        
        )
}