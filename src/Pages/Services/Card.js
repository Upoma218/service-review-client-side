import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Card = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/card')
        .then(res => res.json())
        .then(data => setCard(data))
    },[])

    return (
        <div>
        <div className=' bg-base-100 shadow-xl max-w-screen-xl mx-auto my-24 '>
       <h1 className='text-3xl font-bold text-center'>Services</h1>
       <p className='px-36 py-6 text-center'>You can get all type of service has given bellow! <br />If you want hire me for party dishes, you have to confirm booking minimum 15 days before your programme!<br /> You can contact me for details.
       </p>
       <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 py-12 max-w-screen-xl mx-auto '>
           {
               card.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
           }
       </div>
   </div>
   </div>
    );
};

export default Card;