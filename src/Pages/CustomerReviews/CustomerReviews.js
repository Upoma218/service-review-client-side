import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CustomerReviews = () => {
    const {user} = useContext(AuthContext);
    const reviews = useLoaderData();
    console.log(reviews);
    return (
        <div className="overflow-x-auto w-full shadow-xl max-w-screen-xl mx-auto my-24">
            <h1 className='text-5xl text-center font-bold mb-12'>Customer review: {reviews.length}</h1>
            if(reviews.length === 0){
                alert('No Reviews Were added')
            }
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
                                        <button className='btn btn-circle glass'>X</button>
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