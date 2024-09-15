import { useEffect, useState } from "react";

function Example1() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        console.log('Component Loaded');
    },[]) //give empty dependency array to run only once
    useEffect(()=>{
        console.log('Count updated: ',count);
    },[count]) //triggered when count state got updated
    useEffect(()=>{
        console.log('Name updated: ',name);
    },[name]) //triggered when name state got updated
    return (
        <div>
            <h3>Hello From UseCase</h3>
            <h4>{count} Welcome {name}</h4>
            <button onClick={()=>setCount(count+1)}>+</button>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
        </div>
    );
}

export default Example1;