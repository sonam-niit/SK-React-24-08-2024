import { useState } from "react";
import Customers from '../assets/customers.json';
import CustomerDetails from "./CustomerDetails";
import CustomerForm from "./CustomerForm";

function CustomerList() {
    const [customers,setCustomers]=useState(Customers);
    const [selected,setSelected]=useState(Customers[0]); //by default selected customer is 1st
    const addCustomer=(obj)=>{
        setCustomers([...customers,obj]);
        alert('Customer added successfully')
    }
    return (
        <div>
            <h3 className="p-2 text-bg-success text-center">Cutsomer List</h3>
            <table className="table table-striped table-bordered" >
                <thead>
                    <tr><th>Id</th><th>Name</th><th>Email</th><th>Username</th>
                    <th>Operations</th></tr>
                </thead>
                <tbody>
                    {
                        customers.map(cust=>(
                            <tr key={cust.id}>
                                <td>{cust.id}</td><td>{cust.name}</td><td>{cust.email}</td><td>{cust.username}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={()=>setSelected(cust)}>view</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="row mb-3">
                <div className="col"><CustomerDetails selected={selected} /></div>
                <div className="col"><CustomerForm addCustomer={addCustomer}/> </div>
            </div>
        </div>
    );
}

export default CustomerList;