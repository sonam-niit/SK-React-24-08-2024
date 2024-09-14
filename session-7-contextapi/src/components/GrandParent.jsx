import { useState } from "react";
import Parent from "./Parent";

function GrandParent() {
    const [data,setData]=
    useState('Hello From Grand Parent')
    return ( 
        <div style={{border:'2px solid red'}} 
        className="m-2">
            <h3>Grand Parent Component</h3>
            <Parent  data={data}/>
        </div>
     );
}

export default GrandParent;