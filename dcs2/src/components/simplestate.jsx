import { useState } from "react";

function SimpleState() {

    const [name,setName]= useState('Guest');
    const handleChange=(e)=>{
        setName(e.target.value);
    }
    const handleClick=()=>{
        alert('Welcome '+name)
    }
    return ( 
        <div>
            {/* <h2>Welcome {name} </h2> */}
            <input type="text" name="name" placeholder="Enter Name"
             onChange={handleChange} value={name || ''}/>
            <button onClick={handleClick}>Submit</button>
        </div>
     );
}

export default SimpleState;