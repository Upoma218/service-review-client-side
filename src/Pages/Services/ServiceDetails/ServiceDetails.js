import { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import {  useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../Hook/useTitle';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    useTitle('Services');

    const details = useLoaderData();
    const { _id, title, img, description, serviceFee } = details;
    const navigate = useNavigate()

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'Unregistered';
        const photoURL = form.photoURL.value;
        const text = form.text.value;

        const review = {
            title: title,
            serviceId: _id,
            img: photoURL,
            text: text,
            name: name,
            email: email
        }


        fetch('http://localhost:5000/cardReviews', {
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
                    alert('Review added successfully!');
                    form.reset();
                    navigate('/reviews')
                }
                console.log(data);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='shadow-xl max-w-screen-xl mx-auto mt-12'>
            <h1 className='text-5xl font-bold text-center'>Service Details</h1>
            <div className="card my-12 glass">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img src={img} className="pt-24 px-24 rounded-3xl" alt="" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body shadow md:w-full sm:w-full ">
                    <h2 className="text-center text-3xl font bold">{title}</h2>
                    <p className='font-semibold text-sm text-center my-6'>Service Fee: {serviceFee}</p>
                    <p className="text-center lg:px-60 ">{description}</p>
                </div>
            </div>
                <div className='mb-36 max-w-screen-xl mx-auto mt-24'>
                <h1 className='text-5xl text-center font-bold mb-12'>Add Your review</h1>
                <form onSubmit={handleAddReview}>
                    <div className='grid border-2 border-zinc-800 p-12 rounded sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="name" type="text" placeholder="Name" className="input w-full border-zinc-800" required />
                        <input name="title" type="text" placeholder="Service title" defaultValue={title} readOnly className="input w-full border-zinc-800" required />
                        <input name="email" type="email" placeholder="Your Email" defaultValue={user?.email} readOnly className="input w-full border-zinc-800" required />
                        <input name="photoURL" type="photoURL" placeholder="Your photoURL" className="input w-full border-zinc-800" required />
                    </div>
                    <textarea name='text' className=" border-zinc-800 textarea w-full mt-4" placeholder="Your message" ></textarea>
                    <input type="submit" className="btn btn-active glass w-full mt-4" value=" Add Review" required />
                </form>
            </div>
            
           
        </div>
    );
};

export default ServiceDetails;