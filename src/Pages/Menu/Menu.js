import React, { useEffect, useState } from 'react';
import MenuCard from './MenuCard';

const Menu = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className=' bg-base-100 shadow-xl max-w-screen-xl mx-auto my-24 '>
            <h1 className='text-3xl font-bold text-center'>Food Items</h1>
            <p className='px-36 py-6 text-center'>Here you can get different kind of food! <br /> I prepare to different category food! Some of the samples are here!</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 py-12'>
                {
                    items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default Menu;