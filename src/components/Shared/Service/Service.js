import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateChoosePlan = id => {
        navigate ('/cheekout');
    }

    return (
        <div className='container'>
            <div className='shadow-sm p-2 rounded'>
                <div>
                    <div className="card-body">
                        <h1 className="fw-bold">{title}</h1>
                        <h2 className=''>{name}</h2>
                        <h3 className="fw-bold">${price}</h3>
                        <Card.Img className='img-fluid w-100 mg-50' variant="top" src={img} />
                        <div className="">
                            {description}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button onClick={()=>navigateChoosePlan({service})} className="btn w-75 bg-dark text-info rounded-pill">Choose plan</Button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Service;