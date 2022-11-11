import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';


const Services = () => {

    const [services, setServices] = useState([]);
    const [size, setSize] = useState(3);

    useEffect(() => {
        fetch(`https://flora-the-chef-server.vercel.app/services?size=${size}`)
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [size])

    return (
        <div className=' bg-base-100 shadow-xl max-w-screen-xl mx-auto my-24 '>
            <h1 className='text-3xl font-bold text-center'>Services</h1>
            <p className='px-36 py-6 text-center'>You can get all type of service has given bellow! <br />If you want hire me for party dishes,<br /> you have to confirm booking minimum 15 days before your programme!<br /> You can contact me for details.
            </p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 py-12 max-w-screen-xl mx-auto '>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='max-w-screen-xl lg:mx-96 md:mx-60 sm:mx-72 xs:mx-60'>
                <Link to='/card'><button onClick={() => setSize(6)} className="btn lg:mx-48 md:mx-24 glass text-center btn-xs sm:btn-sm md:btn-md lg:btn-lg mb-12 inline-block align-middle ">View All</button> </Link>
            </div>
        </div>

    );
};

export default Services;