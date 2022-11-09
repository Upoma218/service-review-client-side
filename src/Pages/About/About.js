import React from 'react';
import logo from '../../Assets/AboutImg.png';

const About = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-screen-xl mx-auto mt-24">
            <figure><img src={logo} alt="Album" /></figure>
            <div className="card-body w-1/2 px-20">
                <h2 className="card-title">About Me</h2>
                <p>I am Flora. I am working as a chef in my own kitchen! I like to provide different kind od services which are relevant with different kind of food, desert, snack etc. I like to take order from various customers! I am working in this sector since 2000. I always try to provide the best quality services for my respected customers! </p>
                <div className="stats stats-vertical lg:stats-horizontal shadow">

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