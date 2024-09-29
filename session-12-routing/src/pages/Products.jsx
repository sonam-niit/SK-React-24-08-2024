import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);
    const [fileteredProducts, setFileteredProducts] = useState([]);
    const [category,setCategory]=useState(null);
    const fetchData = async () => {
        try {
            const resp = await axios.get('https://dummyjson.com/products');
            setProducts(resp.data.products);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    
    useEffect(()=>{
        console.log(category);
        
        if(category){
            setFileteredProducts(products.filter(item=>item.category==category));
        }else{
            setFileteredProducts(products);
        }
        
    },[category])
    return (
        <div>
            <h3 className="text-center p-2 text-bg-primary">Products Page</h3>
            <select onChange={(e)=>setCategory(e.target.value)}>
                <option value='beauty'>Beauty</option>
                <option value='furniture'>Furniture</option>
                <option value='fragrances'>Fragrances</option>
                <option value='groceries'>Groceries</option>
            </select>
            <div className="row">
                {
                    fileteredProducts.map((product) => (
                        <div className="col-12 col-lg-3 col-md-6" key={product.id}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <h5 className="card-title">{product.price}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <Link to={`/details/${product.id}`} target="_blank" className="btn btn-primary">View</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Products;