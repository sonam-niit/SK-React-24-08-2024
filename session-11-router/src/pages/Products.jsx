import { useEffect, useState } from "react";

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{

        throw new Error('Not Found');
    },[])
    return (
        <>
            {JSON.stringify(products)}
        </>
    );
}

export default Products;