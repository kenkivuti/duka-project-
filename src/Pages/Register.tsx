import React, { useState } from 'react';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Perform registration logic here, e.g., send data to server
        console.log('Registering with:', { username, password });
        // Reset form fields after registration
        setUsername('');
        setPassword('');
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;