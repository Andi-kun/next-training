import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>The page cannot be found</h2>
            <p>Go back to <Link href="/"><a>HomePage</a></Link></p>
        </div>
     );
}
 
export default NotFound;