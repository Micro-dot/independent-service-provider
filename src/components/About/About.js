import React from 'react';
import mahfuz from '../../images/about/10861 A.JPG';
import './About.css';
const About = () => {
    return (
        <div>
            <div className='d-lg-flex align-items-center container mt-5 '>
                <div className='picture me-lg-5' id='picture' >
                    <img src={mahfuz} alt="" />
                </div>
                <div className='ms-lg-5'>
                    <h1>Hey. What's Up?</h1>
                    <p className=' text fs-4'>
                        I am Mahfuzur Rahman - a junior web developer and learner of Programming Hero. Interest in knowing unknown information using own acquired knowledge. Hold on like glue until the unfinished work is finish. Achieve new knowledge in new days. To fill one's own deficit. Finally, get myself to the top of the whole full stack web development reach.
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default About;