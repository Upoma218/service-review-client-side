import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Logo.png';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
    
    const {user, logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout()
        .then(() => {
            alert ('If you want to order anything, please login !')
        })
        .catch(error => console.log(error))
    } 

    const menuItems = <>
    <Link className='font-semibold mr-10' to='/'>Home</Link>
    <Link className='font-semibold mr-10' to='/about'>About</Link>
    <Link className='font-semibold mr-10' to='/card'>Services</Link>
    <Link className='font-semibold mr-10' to='/blog'>Blog</Link>
    {
        user?.email?
        <>
        <Link className='font-semibold mr-10' to='/myReviews'>My Reviews</Link>
        <Link className='font-semibold mr-10' to='/addService'>Add Service</Link>
        <Link  onClick={handleLogout} className='font-semibold mr-10' to='/'>Logout</Link>
        </>
        :
        <Link className='font-semibold mr-10' to='/login'>Login</Link>
    }
  
</>

    return (
        <div className="navbar  max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl"><img src={logo}alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                   {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn">Get started</Link>
            </div>
        </div>
    );
};

export default Header;