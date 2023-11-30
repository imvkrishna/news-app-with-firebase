import { useState } from 'react';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import './Register.scss';
import { Link, useNavigate } from 'react-router-dom';
import { setShow, setMessage } from '../store/slicers/ToastSlice';
import { useDispatch } from 'react-redux';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            navigate("/login")
        })
            .catch((error) => {
                console.log(error)
                dispatch(setShow({ value: true }))
                dispatch(setMessage({ value: error.message }))
            })
    };

    return (
        <div className='register-container'>
            <div className='register-form'>
                <form onSubmit={handleRegister}>
                    <h1>Register</h1>
                    <p>Already a User? <Link to='/login' style={{ color: '#093f63', textDecoration: 'none' }}><strong>Login</strong></Link></p>
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
                    <button type='submit' className='submit-button'>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;