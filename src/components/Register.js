import { useState } from 'react';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import './Register.scss';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            navigate("/login")
        })
            .catch((error) => {
                console.log(error)
            })
    };

    return (
        <div className='register-container'>
            <div className='regiter-form'>
                <form onSubmit={handleRegister}>
                    <h1>Register</h1>
                    <p>Already a User? <Link to='/login' style={{ color: '#093f63', textDecoration: 'none' }}>Login</Link></p>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit' className='submit-button'>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;