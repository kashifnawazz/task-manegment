import { Card,
        CardContent,
        CardDescription,
        CardFooter, 
        CardHeader,
        CardTitle} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button} from "@/components/ui/button";
import { Navbar } from "@/app/(landingPage)/_components/navbar";

const SignUpPage = () => {
    return (
        <div>
            <Navbar/>
        <div className="flex justify-center mt-40">

            <Card className="w-[350]">
                <CardHeader>
                    <CardTitle>
                        User Registration.
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
                        <div className="grid w-full items-center gap-4">
                        <Input type="Password" placeholder="Enter password again" />
                        </div>
                    
                    
                    
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Link href="/users">
                <Button variant ="default"> SignUp </Button></Link>
                </CardFooter>
                
            </Card>
        </div>
        </div>
    );
};

export default SignUpPage;