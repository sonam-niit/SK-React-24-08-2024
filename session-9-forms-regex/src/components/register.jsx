import { useState } from "react";

function Register() {
    const [user,setUser]=useState({name:'',email:'',username:'',password:''});
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        const validationErrors = {};
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        e.preventDefault();
        if (!user.name) {
            validationErrors.name = "Name cannot be empty"
        }
        if (!user.email) {
            validationErrors.email = "Email cannot be empty"
        } else if (!emailRegex.test(user.email)) {
            validationErrors.email = "Email is not valid"
        }
        if (!user.username) {
            validationErrors.username = "Username cannot be empty"
        }
        if (!user.password) {
            validationErrors.password = "Password cannot be empty"
        } else if (!passwordRegex.test(user.password)) {
            validationErrors.password = "Password is invalid"
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            alert('Form is submitted for approval')
        }
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    id="name" placeholder="john doe" onChange={(e) => setUser({...user,name:e.target.value})} 
                    value={user.name}/>
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email" placeholder="name@example.com" onChange={(e) => setUser({...user,email:e.target.value})} 
                    value={user.email}/>
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    id="username" placeholder="john.doe" onChange={(e) => setUser({...user,username:e.target.value})} 
                    value={user.username}/>
                {errors.username && <div className="invalid-feedback">{errors.username}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" className={`form-control ${errors.password ? 'is-invalid' : ''} `}
                    onChange={(e) => setUser({...user,password:e.target.value})} value={user.password}/>
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Register</button>
                <button type="reset" className="btn btn-secondary ms-2">Reset</button>
            </div>
        </form>
        </div>
     );
}

export default Register;