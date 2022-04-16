import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, name, img, description, price } = service
    return (
        <div className='container'>
            <div className='card-group shadow-lg p-2'>
                <div className="">
                    <div className="card-body">
                        <h1 className="fw-bold">{title}</h1>
                        <h2 className=''>{name}</h2>
                        <h3 className="fw-bold">${price}</h3>
                        <Card.Img className='img-fluid w-100 mg-50' variant="top" src={img} />
                        <div className="text-color">
                            {description}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button className="btn w-75 bg-dark text-info rounded-pill">Choose plan</Button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Service;