import React from 'react';
import logo from '../../Assets/AboutImg.png';
import useTitle from '../../Hook/useTitle';

const About = () => {
    
    useTitle('About');

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-screen-xl mx-auto mt-24">
            <figure><img src={logo} alt="Album" /></figure>
            <div className="card-body lg:w-1/2 md:w-full sm: w-full px-20 text-center">
                <h2 className="text-center text-3xl font-bold mb-6">About Me</h2>
                <p>I am Flora. I am working as a chef in my own kitchen! I like to provide different kind od services which are relevant with different kind of food, desert, snack etc. I like to take order from various customers! I am working in this sector since 2000. I always try to provide the best quality services for my respected customers! </p>
                <div className="stats stats-vertical lg:stats-horizontal md:w-full sm: w-full shadow mb-12">

                    <div className="stat">
                        <div className="stat-title">Customers</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;