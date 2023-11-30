import { useState } from 'react';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { setShow, setMessage } from '../store/slicers/ToastSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate("");
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            console.log(userCredentials)
            navigate("/list")
        })
            .catch((error) => {
                console.log(error)
                dispatch(setShow({ value: true }))
                dispatch(setMessage({ value: error.message }))
            })
    }

    return (
        <div className='register-container'>
            <div className='register-form'>
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <p>New User? <Link to='/register' style={{ color: '#093f63', textDecoration: 'none' }}><strong>Create an Account</strong></Link></p>
                    <div class="input-container">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div class="input-container">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='submit-button'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;