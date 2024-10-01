import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Products() {
    const [products, setProducts] = useState([]);
    const dispatch= useDispatch();
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
    const addToCart=(product)=>{
        dispatch({type:'ADD_ITEM',payload:{product,quantity:1}});
        alert("Item Added to CART")
    }
    
    return (
        <div>
            <h3 className="text-center p-2 text-bg-primary">Products Page</h3>
            <div className="row">
                {
                    products.map((product) => (
                        <div className="col-12 col-lg-3 col-md-6" key={product.id}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <h5 className="card-title">{product.price}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <button className="btn btn-primary" onClick={()=>addToCart(product)}>Add to Cart</button>
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