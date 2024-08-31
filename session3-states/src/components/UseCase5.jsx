import { useState } from "react";

function UseCase5() {
    const [users,setUsers]=useState([
        {id:1,name:'alex',email:'alex@gmail.com'},
        {id:2,name:'bob',email:'bob@gmail.com'},
        {id:3,name:'cat',email:'catty@gmail.com'},
    ]);
    const addData=(id,name,email)=>{
        setUsers([...users,{id,name,email}])
    }
    return ( 
        <div>
            <h3>User's List</h3>
            <table className="table table-striped table-bordered">
                <thead><tr><th>Id</th><th>Name</th><th>Email</th></tr></thead>
                <tbody>
                    {
                        users.map(user=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button onClick={()=>addData(4,'test','test@gmail.com')}>AddNew</button>
        </div>
     );
}

export default UseCase5;