import { useEffect, useState } from "react";

function Example2() {
    const [users,setUsers]=useState([]);
    const fetchData=async ()=>{
        try {
            const resp=await fetch('https://jsonplaceholder.typicode.com/users');
            const json= await resp.json();
            setUsers(json);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    return ( 
        <div>
            <table className="table table-bordered table-striped">
                <thead><tr><th>Id</th><th>Name</th><th>Email</th><th>UserName</th></tr></thead>
                <tbody>
                    {
                        users.map(user=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default Example2;