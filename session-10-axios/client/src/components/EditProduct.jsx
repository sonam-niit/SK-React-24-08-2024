import axios from "axios";
import { useEffect, useState } from "react";

function EditForm({selected,setSelected,fetchData}) {
    const [product,setproduct]=useState(selected);
    useEffect(()=>{
        setproduct(selected);
    },[selected])
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const resp= await axios.put('http://localhost:3000/products/'+product.id,product);
        if(resp.status==200){
            alert("Product edited successfully");
            fetchData();
            setSelected(null);
        }else{
            alert("Error while adding product");
        }
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <h3>Add Edit Product</h3>
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
                <button className="btn btn-primary w-50" type="submit">Update Product</button>
                <button className="btn btn-primary w-50" onClick={()=>setSelected(null)} >Cancel</button>
            </div>
        </form>
     );
}

export default EditForm;