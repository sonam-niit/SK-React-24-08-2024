import { useState } from "react";
//fucntion is coming as prop from parent compponent (addCustomer)
function CustomerForm({addCustomer}) {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({name,email,username});
        const id= Math.floor(Math.random()*100);
        addCustomer({id,name,email,username});
        setEmail('');setName('');setUsername('');
    }
    return ( 
        <div>
            <h3 className="p-2 text-center text-bg-info">Customer Form</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control mt-3" placeholder="John Doe" value={name}
                onChange={(e)=>setName(e.target.value)}/>
                <input type="email" className="form-control mt-3" placeholder="john.doe@gmail.com" value={email}
                onChange={(e)=>setEmail(e.target.value)} />
                <input type="text" className="form-control mt-3" placeholder="john123" value={username}
                onChange={(e)=>setUsername(e.target.value)} />
                <button type="submit" className="btn btn-primary w-100 mt-3">Add Customer</button>
            </form>
        </div>
     );
}

export default CustomerForm;