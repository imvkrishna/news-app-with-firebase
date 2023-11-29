import { useState } from 'react';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate("");

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            navigate("/list")
        })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='register-container'>
            <div className='regiter-form'>
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <p>New User? <Link to='/register' style={{ color: '#093f63', textDecoration: 'none' }}>Create an Account</Link></p>
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
                    <button type='submit' className='submit-button'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;