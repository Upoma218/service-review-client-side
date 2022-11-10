import { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../Hook/useTitle';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews);
    const user = useContext(AuthContext)
    useTitle('Services');

    const details = useLoaderData();
    const { title, img, description, serviceFee } = details;
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json)
            .then(data => setReviews(data))
    }, [])

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'Unregistered';
        const photoURL = form.photoURL.value;
        const text = form.text.value;

        const review = {
            serviceName: title,
            img: photoURL,
            text: text,
            name: name,
            email: email
        }


        fetch('https://genius-car-server-new-upoma218.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
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
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='  shadow-xl max-w-screen-xl mx-auto mt-12'>
            <h1 className='text-3xl font-bold text-center'>Service Details</h1>
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

            <div>
                {
                    reviews.map(text =>
                        <div key={text._id}>

                            <h1 className='text-5xl text-center font-bold mb-12'>Total reviews</h1>
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <button className="btn btn-sm glass">
                                                    Delete Review
                                                </button>
                                            </label>
                                        </th>
                                        <th>Service Name</th>
                                        <th>Name</th>
                                        <th>{text.email}</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th>
                                            <label>
                                                <button className="btn btn-sm glass">
                                                    X
                                                </button>
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="w-24 h-24">
                                                        <img src={text.img} alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{title}</div>
                                                    <div className="font-bold">{text.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                        {text.text}
                                        </td>
                                        <td></td>
                                        <th>
                                            <button className="btn btn-sm glass">
                                                Update Review
                                            </button>
                                        </th>
                                    </tr>

                                </tbody>

                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </tfoot>

                            </table>
                        </div>
                    )
                }
            </div>

            {
                user?.email? 
                <div className='mb-36 max-w-screen-xl mx-auto p-24'>
                <h1 className='text-5xl text-center font-bold mb-12'>Add Your review</h1>
                <form onSubmit={handleAddReview}>
                    <div className='grid border-2 border-zinc-800 p-12 rounded sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="name" type="text" placeholder="Name" className="input w-full border-zinc-800" required />
                        <input name="title" type="text" placeholder="Service title"defaultValue={title} readOnly className="input w-full border-zinc-800" required />
                        <input name="email" type="email" placeholder="Your Email" defaultValue={user?.email} readOnly className="input w-full border-zinc-800" required />
                        <input name="photoURL" type="photoURL" placeholder="Your photoURL" defaultValue={user?.email} readOnly className="input w-full border-zinc-800" required />
                    </div>
                    <textarea name='message' className=" border-zinc-800 textarea w-full mt-4" placeholder="Your message" ></textarea>
                    <input type="submit" className="btn btn-active glass w-full mt-4" value=" Add Review" required />
                </form>
            </div>
                
                :<> Please <Link to='login'>Login</Link> to add review</>

            }
        </div>
    );
};

export default ServiceDetails;