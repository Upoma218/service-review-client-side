import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
const CustomerReviews = ({id}) => {
    const {user, logout} = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cardReviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    useEffect(() => {
        fetch(`http://localhost:5000/cardReviews?service=${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('flora-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logout()
                }
                return res.json()
            })

            .then(data => {
                setReviews(data)
            })

    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to order this order?');
        if (proceed) {
            fetch(`http://localhost:5000/cardReviews/${id}`, {
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
            <h1 className='text-5xl text-center font-bold mb-12'>Customer review: {reviews.length }</h1>
           
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
                    reviews.map(rev =>

                        <tbody key={rev._id}>

                            <tr>
                                <th>
                                    <label>
                                        <button onClick={() => {handleDelete(rev._id)}}  className='btn btn-circle glass'>X</button>
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
                                    <button className="btn glass btn-sm">Update</button>
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

export default CustomerReviews;