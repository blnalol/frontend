import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        navigate("/hrDashboard");
    }

    return (
        <div className="page-container">
            <div className="login-container">
                <h1>ATTENDANCE SYSTEM</h1>
                <h4>Welcome Back</h4>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            className="input-text"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            type="email" 
                            placeholder="youremail@gmail.com" 
                            id="email" 
                            name="email" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            className="input-text"
                            value={pass} 
                            onChange={(e) => setPass(e.target.value)} 
                            type="password" 
                            placeholder="********" 
                            id="password" 
                            name="password" 
                        />
                    </div>
                    <button type="submit" className="login-button">Log In</button>
                </form>
            </div>
        </div>
    );
}
