function Register() {
    return (
        <form className="container mt-3">
            <h3 className="p-2 text-center text-bg-primary">Register Page</h3>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="John Doe" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" className="form-control" aria-describedby="passwordHelpBlock"/>
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
            </div>
            <button className="mb-3 btn btn-primary w-100">Register</button>
        </form>
    );
}

export default Register;