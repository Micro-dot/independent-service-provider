import React from 'react';
import mahfuz from '../../images/about/10861 A.JPG';
import './About.css';
const About = () => {
    return (
        <div>
            <div className='d-flex align-items-center container mt-5 '>
                <div className='picture me-5' >
                    <img src={mahfuz} alt="" />
                </div>
                <div className='ms-5'>
                    <h1>Hey. What's Up?</h1>
                    <p className='text-start fs-5'>
                        I am Mahfuzur Rahman - a junior web developer and learner of Programming Hero. Develop unknown information using acquired knowledge. Hold on like glue until the unfinished work is finish. Achieve new knowledge in new days. To fill one's own deficit. Finally, build myself at the top of the full stack web development.
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default About;