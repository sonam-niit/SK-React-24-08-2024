import { useState } from 'react';
import Customers from '../assets/customers.json';
function SortingDemo() {
    const [sortBy,setSortBy]=useState('name');
    const sortedCustomers=[...Customers].sort((a,b)=>{
        if(sortBy=='name')
            return a.name.localeCompare(b.name)
        if(sortBy=='username')
            return a.username.localeCompare(b.username)
    })
    return ( 
        <div>
            <h3>List of Students</h3>
            <button className='btn btn-secondary' onClick={()=>setSortBy('name')}>Sort By Name</button>
            <button className='btn btn-primary' onClick={()=>setSortBy('username')}>Sort By Username</button>
            <table className="table table-striped table-bordered" >
                <thead>
                    <tr><th>Id</th><th>Name</th><th>Email</th><th>Username</th></tr>
                </thead>
                <tbody>
                    {
                        sortedCustomers.map(cust=>(
                            <tr key={cust.id}>
                                <td>{cust.id}</td><td>{cust.name}</td><td>{cust.email}</td><td>{cust.username}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default SortingDemo;