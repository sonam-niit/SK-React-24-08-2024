import { useState } from "react";
import FormComp from "./FormCom";

function UserCompo() {
    const [name,setName]=useState('');
    const setData=(parm)=>{
        setName(parm);
    }
    return ( 
        <div style={{border: '2px solid red', 
        padding:'5px'}}>
            <h3>Parent Comonent</h3>
            <h4>Welcome {name}</h4>
            <FormComp setData={setData} />
        </div>
     );
}

export default UserCompo;