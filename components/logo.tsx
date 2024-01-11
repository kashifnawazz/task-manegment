import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        
        <Link href = "/">
           <div>
            <Image
                alt ="Logo."
                src="/amplogo.svg"
                height={42}
                width={244}
                />
           </div>
           
        </Link>
        
    )
}