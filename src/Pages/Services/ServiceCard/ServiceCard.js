import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {

    const { _id, title, img, description, serviceFee } = service;

    return (
        <div className="card border-2 border-zinc-900 rounded-xl shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure className="px-10 pt-10">
                        <img src={img} className="h-60 w-full" alt="" />
                    </figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{
                    description.length > 100 ? description.slice(0, 110) + '...' : description
                }
                </p>
                <p className='font-semibold text-sm'>Service Fee: {serviceFee}</p>

                <div className="card-actions">
                    <Link to={`/services/${_id}`} className='text-blue-600'><button className="btn glass  btn-sm my-4">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;


