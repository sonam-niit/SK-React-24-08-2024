import { useState } from "react";

function UseCase1() {
    const [fullName,setFullName]=useState('Skill Academy')
    const changeName=()=>{
        setFullName('Sonam Soni')
    }
    return ( 
        <div>
            <h3>Use Case 1: {fullName}</h3>
            <button onClick={changeName}>Click</button>
        </div>
     );
}

export default UseCase1;