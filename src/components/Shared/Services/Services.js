import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('gym.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div className=''>
            <h1 className='text-success text-center mt-5 mb-5'>Join Our Membership</h1>
            <div className='service-container'>
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;