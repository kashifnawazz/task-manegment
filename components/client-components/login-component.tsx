'use client'

import axios from "axios"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function LoginComponent (){


    return (
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>This is PlaceHolder for any Errors</CardDescription>
    
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-5">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="UserName">UserName</Label>
                                <Input id="UserName" placeholder="UserName"></Input>

                            </div>
                            <Label htmlFor="Password">Password</Label>
                                <Input id="UserName" placeholder="Enter Your Password"></Input>


                        </div>
                    </form>


                </CardContent>

                <CardFooter className="flex justify-between">
                    <Button>Login</Button>
                </CardFooter>
            </Card>
        
        )
}