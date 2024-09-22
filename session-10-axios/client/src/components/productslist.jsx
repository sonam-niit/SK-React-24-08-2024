import axios from "axios";
import { useEffect, useState } from "react";
import ProductForm from "./productForm";
import EditForm from "./EditProduct";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [selected,setSelected]=useState(null);
    const handleDelete=async(id)=>{
        try {
            const resp=await axios.delete(`http://localhost:3000/products/${id}`);
            if(resp.status=200)
            {
                alert("Product Deleted");
                fetchData();
            }  
        } catch (error) {
            alert('error occured while deleting')
        }
    }
    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:3000/products');
            setProducts(resp.data);
            // setTimeout(() => {
            //     setProducts(resp.data);
            // }, 2000)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            {/* {
                products ? */}
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr><th>ID</th><th>Name</th><th>Price</th><th>Category</th></tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.category}</td>
                                        <td>
                                            <button className="btn btn-success" 
                                            onClick={()=>setSelected(product)}>Edit</button>
                                            <button className="btn btn-danger ms-2" 
                                            onClick={()=>handleDelete(product.id)}>delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {/* : <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
            } */}

            <div className="row">
                <div className="col">
                    <ProductForm fetchData={fetchData} />
                </div>
                <div className="col">
                    {selected && <EditForm  selected={selected} setSelected={setSelected}
                    fetchData={fetchData}/>}
                </div>
            </div>
        </div>
    );
}

export default ProductList;