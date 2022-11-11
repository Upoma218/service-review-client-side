import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyReviews = () => {

    const { user } = useContext(AuthContext);


    const [reviews, setReviews] = useState([]);
    // const reviews = useLoaderData();
    // console.log(reviews);

    useEffect(() => {
        fetch('https://flora-the-chef-server.vercel.app/cardReviews')
        
            .then(res => res.json())
            .then(data => setReviews([...data].reverse()))
    }, [])

    useEffect(() => {
       if(user?.email){
        fetch(`https://flora-the-chef-server.vercel.app/myReviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('flora-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    // return logout()
                }
                return res.json()
            })

            .then(data => {

                setReviews(data)
            })
       }

    }, [user?.email])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to order this order?');
        if (proceed) {
            fetch(`https://flora-the-chef-server.vercel.app/cardReviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('flora-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div className="overflow-x-auto w-full shadow-xl max-w-screen-xl mx-auto my-24">
            <h1 className='text-5xl text-center font-bold mb-12'>My review: {reviews?.length}</h1>

            <table className="table w-full" >
                <thead >
                    <tr>
                        <th>
                            <label>
                                Delete
                            </label>
                        </th>
                        <th>Image</th>
                        <th>User</th>
                        <th>Review</th>
                        <th>Update</th>
                    </tr>
                </thead>
                {
                   reviews?.length &&  reviews?.map(rev =>

                        <tbody key={rev._id}>

                            <tr>
                                <th>
                                    <label>
                                        <button onClick={() => { handleDelete(rev._id) }} className='btn btn-circle glass'>X</button>
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            {
                                                user?.email && <div className="avatar">
                                                    <div className="w-12 rounded-full">
                                                        <img src={user.photoURL} alt="" />
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                        <div>
                                            <div className="font-bold">{rev.title}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {rev.name}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{rev.email}</span>
                                </td>
                                <td>{rev.text}</td>
                                <th>
                                    <Link to={`/updateReview/${rev._id}`}><button className="btn glass btn-sm">Update</button></Link>
                                </th>
                            </tr>

                        </tbody>

                    )
                }


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
    );
};

export default MyReviews;