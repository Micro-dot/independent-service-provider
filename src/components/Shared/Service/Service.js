import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';
import './Service.css';
const Service = ({ service }) => {
    const { title, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateChoosePlan = id => {
        navigate ('/cheekout');
    }

    return (
        <div className='container'>
            <div className='shadow-sm p-2 rounded main-card'>
                    <div className="card-body">
                        <h1 className="fw-bold">{title}</h1>
                        <h2>{name}</h2>
                        <h3 className="fw-bold text-warning">${price}</h3>
                        <Card.Img className='images' variant="top" src={img} />
                        <div className="description">
                            {description}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button onClick={()=>navigateChoosePlan({service})} className=" choose-button btn w-75 bg-dark text-info rounded-pill ">Choose plan</Button>
                    </div>
            </div>
        </div >
    );
};

export default Service;