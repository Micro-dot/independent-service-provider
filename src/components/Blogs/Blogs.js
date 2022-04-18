import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='blog'>
            <div>
                <h3 style={{ color: 'gold' }}>Difference between authorization and authentication?</h3>
                <p> <b>Authentication: </b>
                    It is the process of verifying the identity of a user. Username and password combination is the most popular authentication mechanism. <br />
                    <b>Authorization</b>
                    Authorization is the process of giving someone the ability to access a resource.He can change the code if approved. A user can provide services on how to use his site. A good example is business ownership.
                </p>
            </div>
            <div>
                <h3 style={{ color: 'gold' }}>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>
                    <b>Whyusing firebase: </b>Firebase manages all data real-time in the database. It's most usefull. I think it's more secure other authentication. Because, it is a process given by Google. So we know Google is the safest organization <br />
                    <h4>What other options do you have to implement authentication?</h4>
                    <li>Single-Factor</li>
                    <li>Two-Factor Authentication</li>
                    <li>Single Sign-On </li>
                    <li>Password Authentication Protocol</li>
                </p>
            </div>
            <div>
                <h3 style={{ color: 'gold' }}>What other services does firebase provide other than authentication?</h3>
                <p>
                    <li>Heroku</li>
                    <li>Backendless</li>
                    <li>Back4app</li>
                    <li>Deployd</li>
                    <li>NHost</li>
                    <li>Kinvey</li>
                </p>
            </div>
        </div>
    );
};

export default Blogs;