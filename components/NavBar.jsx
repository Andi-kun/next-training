import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/vercel.svg" width={120} height={77} />
            </div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/ninjas">
                <a>List</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
     );
}
 
export default NavBar;