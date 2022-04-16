import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const handleEmail = event =>{
        setEmail(event.target.value)
    }
    const handlePassword = event =>{
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event =>{
        setConfirmPassword(event.target.value)
    }
    const handleFormSignin = event =>{
        event.preventDefault();
    }
    return (
        <div className="login-container">
            <div className="login-title">Sign up</div>

            <form onSubmit={handleFormSignin} className="login-form">
                <input onChange={handleEmail} type="text" placeholder="Your Email" />
                <input onChange={handlePassword} type="password" name="" id="" placeholder='password' />
                <input onChange={handleConfirmPassword} type="password" placeholder="confirm password" />
                <button>Sign up</button>
            </form>

            <p className="mt-2">Already have an account? <Link to='/login'>Login</Link></p>

            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'> or </p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>

            <div>
                <button>Google</button>
                <button>Facebook</button>
                <button>Github</button>
            </div>

        </div>
    );
};

export default Signup;