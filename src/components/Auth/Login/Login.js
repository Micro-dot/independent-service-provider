import React, {useState } from 'react';
import { Link, useLocation, useNavigate} from "react-router-dom";
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    let from = location.state?.from?.pathname || '/'
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const handleEmail = event =>{
        setEmail(event.target.value);
    }
    const handlePassword = event =>{
        setPassword(event.target.value);
    }

    const handleFromLogin = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    const handlepasswordreset = async () =>{
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent Email');
        }
        else{
            toast('please enter your email address');
        }
    }
 
    if(user){
        navigate(from,{replace:true});
    }
    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>

            <form onSubmit={handleFromLogin} className="login-form">
                <input onChange={handleEmail} type="text" placeholder="Your Email" required/>
                <input  onChange={handlePassword} type="password" placeholder="password" required/>
                <p className='error-message'>{error?.message}</p>
                <p className='btn btn-link text-primary pe-auto text-decoration-none' onClick={handlepasswordreset} variant="link">Forget Password</p>
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
            <ToastContainer/>
        </div>
    );
};

export default Login;