import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

function Login({ login }) {
    const [user_captcha_value, setuser_captcha_value] = useState();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateCaptcha(user_captcha_value) == true) {
            alert('Captcha Matched');
            login();
            navigate('/dashboard');
        }
        else {
            alert('Captcha Does Not Match');
        }

    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label for="inputPassword5" className="form-label">Password</label>
                <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
            </div>
            <div className="mb-3">
                <label for="user_captcha_value" className="form-label">Enter Captcha Here</label>
                <input type="text" id="user_captcha_value" className="form-control"
                    onChange={(e) => setuser_captcha_value(e.target.value)} />
                <LoadCanvasTemplateNoReload />
            </div>
            <button className="btn btn-primary" type="submit">Login</button>
        </form>
    );
}

export default Login;