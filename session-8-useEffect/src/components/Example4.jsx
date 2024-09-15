import { useEffect, useState } from "react";

function Example4() {
    const [email,setEmail]=useState('');
    const [isValid,setIsValid]=useState(true);
    const handleClick=()=>{
        //validation logic
        alert('form submitted')
    }
    useEffect(()=>{
        const pattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(!pattern.test(email)){
            setIsValid(false);
        }else{
            setIsValid(true);
        }
    },[email])
    return ( 
        <div>
            <input type="email" placeholder="Enter Email"
            onChange={(e)=>setEmail(e.target.value)}/>
            {!isValid && <p>Email Id is Invalid</p>}
            <button onClick={handleClick}>Save Data</button>
        </div>
     );
}

export default Example4;