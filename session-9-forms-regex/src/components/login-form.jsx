import { useState } from "react";
// import { GeneratePassword } from "js-generate-password";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({}); //default is object
    const handleClick = () => {
        // const tempPassword = GeneratePassword({
        //     length: 14,
        //     symbols: true,
        //   });

        // setPassword(tempPassword);
    }
    const handleSubmit = (e) => {
        const validationErrors = {};
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        e.preventDefault();
        if (!email) {
            validationErrors.email = "Email cannot be empty"
        } else if (!emailRegex.test(email)) {
            validationErrors.email = "Email is not valid"
        }
        if (!password) {
            validationErrors.password = "Password cannot be empty"
        } else if (!passwordRegex.test(password)) {
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
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" className={`form-control ${errors.password ? 'is-invalid' : ''} `}
                    onChange={(e) => setPassword(e.target.value)} />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="reset" className="btn btn-secondary ms-2">Reset</button>
            </div>
        </form>
        {/* <button type="button" className="btn btn-success float-end" onClick={handleClick}>Generate Password</button> */}
        </div>
        
    );
}

export default LoginForm;