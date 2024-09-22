import axios from "axios";
import { useState } from "react";

function ProductForm({fetchData}) {
    const [product,setproduct]=useState({name:'',price:'',category:''})
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const id= Math.floor(Math.random()*1000)+"";
        product.id=id;
        const resp= await axios.post('http://localhost:3000/products',product);
        if(resp.status===201){
            alert("Product added successfully");
            fetchData();
            setproduct({name:'',price:'',category:''})
        }else{
            alert("Error while adding product");
        }
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <h3>Add New Product</h3>
            <div className="form-group mb-3">
                <label htmlFor="name">Product Name:</label>
                <input type="text" placeholder="Lenovo Thinkpad" className="form-control"
                id='name' onChange={(e)=>setproduct({...product,name:e.target.value})} 
                value={product.name}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="price">Product Price:</label>
                <input type="text" placeholder="78999" className="form-control"
                id="price" onChange={(e)=>setproduct({...product,price:e.target.value})} 
                value={product.price}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="category">Product Category:</label>
                <input type="text" placeholder="Electronics" className="form-control"
                onChange={(e)=>setproduct({...product,category:e.target.value})} 
                value={product.category}/>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary w-100" type="submit">Add Product</button>
            </div>
        </form>
     );
}

export default ProductForm;