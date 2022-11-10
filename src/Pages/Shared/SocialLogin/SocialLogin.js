import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';



const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res => {
            const user = res.user;
            console.log(user);
            const currentUser = {
                email: user.email
            } 
            fetch('http://localhost:5000/jwt', {
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
        .catch(err => console.error(err));
    }


    return (
        <div className='text-center my-2 '>
            <button onClick={handleGoogleSignIn} className='btn glass w-4/5'>Google</button> 
        </div>
    );
};

export default SocialLogin;