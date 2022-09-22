export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(ninja => ({ 
        params: { id: ninja.id.toString() }
    }))  
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: { ninja : data }
    }
}


const Details = ({ ninja }) => {
    const { name, email, website, address } = ninja;
    return ( 
        <div>
            <h1>{ name }</h1>
            <p>{ email }</p>
            <p>{ website }</p>
            <p>{ address.city }</p>
        </div>
     );
}
 
export default Details;