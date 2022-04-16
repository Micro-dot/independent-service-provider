import React, { useRef } from 'react';
import { Link, Navigate, useLocation} from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import "./Login.css";

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation('');

    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);

    const handleFromLogin = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password)
    }

    if(user){
        Navigate('/home');
    }
    return (
        <div className="login-container">
            <div className="login-title mt-2">LOGIN</div>

            <form onSubmit={handleFromLogin} className="login-form">
                <input ref={emailRef} type="text" placeholder="Your Email" required/>
                <input  ref={passwordRef} type="password" placeholder="password" required/>
                <button>Login</button>
            </form>
            
            <p className="mt-2">Don't have an account? <Link to='/signup'>Sign Up</Link></p>

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

export default Login;