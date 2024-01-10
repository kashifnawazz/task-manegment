import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href = "/">
           <div>
            <Image
                alt ="Logo."
                src="/logo-transparent.png"
                height={40}
                width={40}
                />
           </div>
        </Link>
    )
}