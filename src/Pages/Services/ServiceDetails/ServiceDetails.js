import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const details = useLoaderData();
    const { title, img, description, serviceFee } = details;
    return (
        <div className=' bg-base-100 shadow-xl max-w-screen-xl mx-auto mt-12'>
            <h1 className='text-3xl font-bold text-center'>Service Details</h1>
            <div className="card my-12 glass">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img src={img} className="pt-24 px-24 rounded-3xl" alt="" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="text-center text-3xl font bold">{title}</h2>
                    <p className='font-semibold text-sm text-center my-6'>Service Fee: {serviceFee}</p>
                    <p className="text-center px-60 ">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;