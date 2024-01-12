import { Button } from "@/components/ui/button";
import { Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle } from "@/components/ui/card";



import Link from "next/link";
import { Input } from "@/components/ui/input";
const SignInPage = () => {
    return(
        <div className="flex justify-center mt-40">
            <Card className="w-[350]">
                <CardHeader>
                    <CardTitle>
                       User Login
                    </CardTitle>
                    <CardDescription>
                        Some Message if something went wrong
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    
                        <div className="grid w-full items-center gap-4 mb-5">
                        <Input type="email" placeholder="Email" />
                        </div>
                        <div className="grid w-full items-center gap-4 py-px-4 mb-2">
                        <Input type="PassWord" placeholder="Choose Paasword" />
                        </div>
                       
                    
                    
                    
                </CardContent>
                <CardFooter className="flex justify-between">
                <Button variant ="default">logIn </Button>
                </CardFooter>
                
            </Card>
        </div>
     
    );

};

export default SignInPage;