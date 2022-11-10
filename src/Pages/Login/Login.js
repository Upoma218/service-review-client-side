import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import loginImg from '../../Assets/login.png';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useTitle from '../../Hook/useTitle';

const Login = () => {
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    useTitle('Login');
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                fetch('https://genius-car-server-new-upoma218.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('genius-token', data.token);
                        alert('Successfully logged in!')
                        navigate(from, { replace: true });
                    });
                
            })
            .catch(error => console.log(error));
    }
    return (
        <div className="hero my-12"> 
            <div className="hero-content flex-col lg:flex-row gap-6">
                <div>
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-zinc-800">
                    <h1 className="text-5xl text-center my-6 font-bold pt-4">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn glass" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="font-normal text-base text-center my-3">Or Sign In with </p>
                    <SocialLogin></SocialLogin>
                    <p className="font-normal text-base text-center mt-2 mb-5">New to Genius Car ? <Link to='/signup' className='font-semibold text-sm'>Please Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;