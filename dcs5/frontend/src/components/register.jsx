import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function Register() {
    const [user, setUser] = useState({ name: '', email: '', username: '', password: '' })
    const handleClick=async ()=>{
        try {
            const resp= await axios.get('http://localhost:5000/api/auth/pwdGenerate');
            setUser({...user,password:resp.data})
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post('http://localhost:5000/api/auth/register', user);
            console.log(resp);

            if (resp.status == 201) {
                // alert("User added successfully");
                toast.success(resp.data.message);
                setUser({ name: '', email: '', username: '', password: '' })
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }


    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Registration Form</h3>
            <div className="form-group mb-3">
                <label htmlFor="name">User's Full Name:</label>
                <input type="text" placeholder="John Doe" className="form-control"
                    id='name' onChange={(e) => setUser({ ...user, name: e.target.value })}
                    value={user.name} />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">User's EmailId:</label>
                <input type="email" placeholder="john.doe@gmail.com" className="form-control"
                    id='email' onChange={(e) => setUser({ ...user, email: e.target.value })}
                    value={user.email} />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="username">User's UserName:</label>
                <input type="text" placeholder="John.Doe" className="form-control"
                    id='username' onChange={(e) => setUser({ ...user, username: e.target.value })}
                    value={user.username} />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password">User's Password:</label>
                <input type="text" placeholder="SECRET" className="form-control"
                    id='password' value={user.password} readOnly />
                <button type="button" onClick={handleClick} className="btn btn-secondary w-100 mt-3">Generate Password</button>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary w-100" type="submit">Register</button>
            </div>
        </form>
    );
}

export default Register;