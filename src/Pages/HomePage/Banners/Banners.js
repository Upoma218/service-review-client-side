import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/HeroImg.png'


const Banners = () => {
    return (
        <div className="hero mt-6 text-center">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-screen-xl mx-auto">
                <img src={logo} className=" rounded-lg shadow-2xl"alt='' />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Welcome To Flora's Kitchen</h1>
                    <p className="py-10">Hey!! Are you hungry?? Feel free to order your favorite dish!! I can provide you the best quality homemade food in a reasonable price!! You can get home delivery within a short time!! You can also book me for any type of party dishes!! So, why late? Just place Your order soon!!</p>
                    <Link to='/services'><button className="btn glass w-3/5">Order Now!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banners;

