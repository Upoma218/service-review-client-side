import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import loginImg from '../../Assets/login.png';
import { setAuthToken } from '../../Api/Auth';
import useTitle from '../../Hook/useTitle';

const SignUp = () => {
    const {createUser, } = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setAuthToken(user);
        })
        .catch(error => console.log(error));
    }
    useTitle('Sign Up');

    return (
        <div className="hero my-12">
        <div className="hero-content flex-col lg:flex-row gap-6">
            <div>
                <img src={loginImg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-zinc-800">
                <h1 className="text-5xl text-center my-5 font-bold pt-4">Sign up</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="Your email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Your password" className="input input-bordered" />
                        
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn glass" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className="font-normal text-base text-center my-2">Or Sign Up with </p>
                <p className=" font-normal text-base text-center mt-2 mb-5">Already have an account ? Please <Link to='/login' className='font-semibold text-sm'> Sign In</Link> </p>
            </div>
            
        </div>
    </div>
    );
};

export default SignUp;