import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddServices = () => {
    const {_id, title, price, img } = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name= `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'Unregistered';    
        const phone = form.phone.value;    
        const message = form.message.value;    

        const order = {
            service: _id,
            serviceName: title,
            img: img,
            price,
            customer: name,
            email,
            phone,
            message
        }


        fetch('https://genius-car-server-new-upoma218.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type':'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Order placed Successfully!');
                form.reset();
                navigate('/orders')
            }
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            
        </div>
    );
};

export default AddServices;