import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, img, description , serviceFee} = service;
    return (
        <div className="card border-2 border-zinc-900 rounded-xl shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} className="h-60 w-full" alt="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{
                    description.length > 100 ? description.slice(0, 110) + '...' : description
                }
                </p>
                <p className='font-semibold text-sm'>Service Fee: {serviceFee}</p>

                <div className="card-actions">
                   <button className="btn glass  btn-sm my-4">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;


