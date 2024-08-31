import { useState } from "react";

function UseCase4() {
    const [user,setUser]=useState({
        name:'Alex',
        email:'alex@gmail.com',
        country:'India'})

    const change=(name,email,country)=>{
        setUser({name,email,country});
    }
    return ( 
        <div>
            <h3>Welcome {user.name}</h3>
            <ul>
                <li>{user.email}</li>
                <li>{user.country}</li>
            </ul>
            <button onClick={()=>change('sonam','sonam@gmail.com','India')}>Change</button>
        </div>
     );
}

export default UseCase4;