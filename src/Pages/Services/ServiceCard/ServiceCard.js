import React from 'react';

const ServiceCard = ({service}) => {
    const {title, img, description} = service;
    return (
        <div className="card w-96 border-2 border-zinc-900 rounded-xl shadow-xl">
            <div className="card-body -lg text-center ">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p>{description}</p>
            </div>
            <figure><img src={img} className="h-80 w-full" alt="Shoes" /></figure>
        </div>
    );
};

export default ServiceCard;