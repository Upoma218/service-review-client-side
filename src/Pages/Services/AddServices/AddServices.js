import React from 'react';
import { useNavigate } from 'react-router-dom';


const AddServices = () => {

    const navigate = useNavigate();

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const serviceFee = form.serviceFee.value;
        const img = form.img.value;
        const text = form.description.value;

        const review = {
            img: img,
            description: text,
            title: title,
            serviceFee: serviceFee
        }


        fetch('http://localhost:5000/services', {
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
                    alert('Service added successfully!');
                    form.reset();
                    navigate('/card')
                }
                console.log(data);
            })
            .catch(error => console.log(error))
    }

    
    return (
        <div className='mb-36 max-w-screen-xl mx-auto mt-24'>
                <h1 className='text-5xl text-center font-bold mb-12'>Add Service</h1>
                <form onSubmit={handleAddService}>
                    <div className='grid border-2 border-zinc-800 p-12 rounded sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="title" type="text" placeholder="Service Title" className="input w-full border-zinc-800" required />
                        <input name="img" type="text" placeholder="Image Link"  className="input w-full border-zinc-800" required />
                        <input name="serviceFee" type="text" placeholder="Service Fee"  className="input w-full border-zinc-800" required />
                        <input name="description" type="text" placeholder="Details About Service" className="input w-full border-zinc-800" required />
                    </div>
                    <input type="submit" className="btn btn-active glass w-full mt-4" value=" Add Service" required />
                </form>
            </div>
    );
};

export default AddServices;