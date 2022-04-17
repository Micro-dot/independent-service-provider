import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Cheekout.css';
const Cheekout = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1 className='form-title'>Need your information</h1>
        <div className='form-container'>
            <form>
                <label htmlFor="">Email</label>
                <input value={user?.email} readOnly type="email" name="" id="" />
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="" placeholder='Your Name' required/>
                <label htmlFor="">Phone</label>
                <input type="text" name="" id="" placeholder='Phone Number' required/>
                <label htmlFor="">Address</label>
                <input type="text" name="" id="" placeholder='Your Current Address' required/>
                <label htmlFor="">Height</label>
                <input type="text" name="" id="" placeholder='Example: 5 ft 1 in' required/>
                <label htmlFor="">Weight</label>
                <input type="text" name="" id="" placeholder='Example: 60kg' required/>
                <button>Submit</button>
            </form>
        </div>
        </div>
    );
};

export default Cheekout;