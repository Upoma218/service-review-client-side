import React, { useState } from 'react';
import {  useLoaderData } from 'react-router-dom';

const UpdateReviews = () => {
    const prevReviews = useLoaderData();
    const [review, setReview] = useState(prevReviews);
 
    const handleUpdateReview = event =>{
        event.preventDefault();
        // console.log(review);
        fetch(`https://flora-the-chef-server.vercel.app/cardReviews/${prevReviews._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                alert('Review updated')
                console.log(data);
            }
            
        })
    }
    const handleInputChange = event => {
        const field = event.target.text;
        const value = event.target.value;
        const newReview = {...review};
        newReview[field] = value;
        setReview(newReview);
    }

    return (
        <div  className="overflow-x-auto w-full shadow-xl max-w-screen-xl mx-auto my-24">
             <h1 className='text-5xl text-center font-bold mb-12'>Update Review</h1>
            <form onSubmit={handleUpdateReview}>
                <input onChange={handleInputChange} defaultValue={prevReviews.name} type="text"name='text'placeholder='Your Review'required />
                <button type="submit">Update Review</button>
            </form>
        </div>
    );
};

export default UpdateReviews;