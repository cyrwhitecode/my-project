import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import '../styles/login.css'

export function Login ({ isOpen }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email==="" || password==="") {
            setError("email or password empty!");
        } else if (password.length < 8) {
            setError("password must contain at least 8 characters!");
        } else {
            login(email, password);
            const response = login(email, password);
            if (response) {
                navigate('/dashboard');
                alert("Logged successfully");
            } else {
                alert("Login process failed!");
                setError("Incorrect email or password!")
            }
        }
        
    }

    return (
        <div className="container">
            <div className="form-container">
            <div>
                <h1 className="login">LOGIN</h1>
                <p className="login-msg"><span>CoffeeShop</span> want you to login your account</p>
            </div>
            <div className="sub-form-container">
                <div className="main-field">
                    <div className="field">
                        <label>Email</label>
                        <input 
                            className="inp"
                            type="email" 
                            placeholder="cyolan@gmail.com"
                            value={email}   
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div><br />
                    <div className="field">
                        <label>Password</label>
                        <input 
                            className="inp"
                            type="password" 
                            placeholder="password"
                            value={password}    
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                {error && <div className="error"> {error} </div> }
                <div className="footer-login"><hr /><br />
                    <code className="code">Password forgoten?</code><br />
                    <button className="login-btn" onClick={() => handleLogin()}>Login</button><br />
                    <code className="code">Don't have an account yet?</code>
                </div><br />
                
            </div>
        </div>
        </div>
    )
}