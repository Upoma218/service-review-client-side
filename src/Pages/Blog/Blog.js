import React from 'react';
import useTitle from '../../Hook/useTitle';

const Blog = () => {

    useTitle('Blog')
    return (
        <div>
            <h1 className='text-center text-5xl font-bold p-12'>Blogs</h1>
            <div className='pb-12 pt-12'>
                <div className=' text-center border-2 border-zinc-800 rounded-3xl mx-12 py-12 mb-12'>
                    <h1 className='text-3xl my-18' >1. Differences between SQL and NoSQL?</h1>
                    <p className=' text-md p-8'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
                <div className=' text-center border-2 border-zinc-800 rounded-3xl mx-12 py-12 mb-12'>
                    <h1 className='text-3xl my-18' >2. What is JWT and how does it work?</h1>
                    <p className=' text-md p-8'>
                        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                    </p>
                </div>
                <div className=' text-center border-2 border-zinc-800 rounded-3xl mx-12 py-12 mb-12'>
                    <h1 className='text-3xl my-18' >3. What is the differences between JavaScripts an node.js?</h1>
                    <p className=' text-md p-8'>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
                </div>
                <div className=' text-center border-2 border-zinc-800 rounded-3xl mx-12 py-12 mb-12'>
                    <h1 className='text-3xl my-18' >4. How does node.js handle multiple requests at the same time?</h1>
                    <p className=' text-md p-8'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;