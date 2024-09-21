import { useState } from "react";

function Form({addUser}) {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const handleSubmit=()=>{
        alert(name+ " "+email);
        addUser({name,email})
    }
    return ( 
        <div>
            <input type="text" placeholder="name" 
            onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="email" 
            onChange={(e)=>setEmail(e.target.value)}/>

            <button onClick={handleSubmit}>Save Data</button>
        </div>
     );
}

export default Form;