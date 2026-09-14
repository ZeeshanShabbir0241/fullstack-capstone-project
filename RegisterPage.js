// RegisterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            // Task 9: fetch request containing method and headers attributes
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Save token/email to session storage and navigate
                sessionStorage.setItem('auth-token', data.authtoken);
                sessionStorage.setItem('email', data.email);
                navigate('/app');
            } else {
                setError(data.error || 'Registration failed');
            }
        } catch (err) {
            setError('Error connecting to server');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Register</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;