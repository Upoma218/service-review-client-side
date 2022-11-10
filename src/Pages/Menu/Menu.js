import React from 'react';

const Menu = () => {
    return (
        <div className=' bg-base-100 shadow-xl max-w-screen-xl mx-auto mt-24 text-center'>
            <h1 className='text-3xl font-bold'>Food Items</h1>
            <p className='px-36 py-6'>Here you can get different kind of food! <br /> I prepare to different category food! Some of the samples are here!</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default Menu;