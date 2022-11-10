import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../Api/Auth';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

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

    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-6">
            <div>
                <img src={login} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl text-center my-5 font-bold">Sign up</h1>
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
                        <input className="btn btn-accent" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className="font-normal text-base text-zinc-600 text-center my-2">Or Sign Up with </p>
                <p className=" font-normal text-base text-zinc-600 text-center mt-2 mb-5">Already have an account ? Please <Link to='/login' className='font-semibold text-xl text-orange-600'> Sign In</Link> </p>
            </div>
            
        </div>
    </div>
    );
};

export default SignUp;