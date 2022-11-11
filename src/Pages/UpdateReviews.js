import React from 'react';
import {  useLoaderData } from 'react-router-dom';

const UpdateReviews = () => {
    const myReview = useLoaderData();
    console.log(myReview)

    return (
        <div className='max-w-screen-xl mx-auto my-24'>
            <h1 className='text-5xl text-center font-bold mb-12'>Update Your Review : {myReview}</h1>
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


                <tbody>

                    <tr>
                        <th>
                            <label>
                                <button className='btn btn-circle glass'>X</button>
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src='' alt="" />
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <div className="font-bold"></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <br />
                            <span className="badge badge-ghost badge-sm"></span>
                        </td>
                        <td></td>
                        <th>
                            <button className="btn glass btn-sm">Update</button>
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
    );
};

export default UpdateReviews;