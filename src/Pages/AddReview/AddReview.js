import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddReview = ({ title }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddReviews = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'Unregistered';
        const text = form.text.value;
        const img = form.photoURL.value;

        const review = {
            serviceName: title,
            img: img,
            customer: name,
            email: email,
            review: text,
        }


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('flora-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('review placed Successfully!');
                    form.reset();
                    navigate('/reviews')
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='mb-36 max-w-screen-xl mx-auto bg-slate-200 p-24'>
            <form onSubmit={handleAddReviews}>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input w-full" required />
                    <input name="lastName" type="text" placeholder="Last Name" className="input w-full" required />
                    <input name="phone" type="text" placeholder="Your Phone" className="input w-full" required />
                    <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input w-full" required />
                </div>
                <textarea name='message' className="textarea w-full mt-4" placeholder="Your message" ></textarea>
                <input type="submit" className="btn btn-active btn-accent w-full mt-4" value="Order confirm" required />
            </form>
        </div>
    );
};

export default AddReview;