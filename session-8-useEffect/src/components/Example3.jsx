import { useEffect } from "react";

function Example3() {
    useEffect(()=>{
        console.log("Component Mounted");
        
        return (()=>{
            console.log('Component will unmount');
        })
    },[])
    return ( 
        <div>
            <h3>Component 3</h3>
        </div>
     );
}

export default Example3;