import React from 'react';

const DetailsCard = ({ detail }) => {

    const {title, img, description, serviceFee } = detail;

    return (
        <div className="card w-96 glass">
            <figure><img src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className='font-semibold text-sm'>Service Fee: {serviceFee}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;