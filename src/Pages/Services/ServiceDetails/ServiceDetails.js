import React, { useEffect, useState } from 'react';
import DetailsCard from './DetailsCard';

const ServiceDetails = () => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/services/${details._id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    return (
        <div className=' bg-base-100 shadow-xl max-w-screen-xl mx-auto mt-12 mb-24'>
            <h1 className='text-3xl font-bold text-center'>Service Details</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 py-12 max-w-screen-xl mx-auto '>
                {
                    details.map(detail => <DetailsCard key={detail._id} detail={detail}></DetailsCard>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;