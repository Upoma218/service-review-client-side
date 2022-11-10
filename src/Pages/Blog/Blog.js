import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-bold p-12'>Blogs</h1>
            <div className='pb-12 pt-12'>
                <div className=' text-center border-2 border-zinc-800 rounded-3xl mx-12 py-12 mb-12'>
                    <h1 className='text-3xl my-18' >1. What is 'Cors'?</h1>
                    <p className=' text-md p-8'>Most of the time, a script running in the user's browser would only ever need to access resources on the same origin think about API calls to the same backend that served the JavaScript code in the first place. So the fact that JavaScript can't normally access resources on other origins is a good thing for security.</p>
                </div>
                <div className=' text-center border-2 border-zinc-800 rounded-3xl mx-12 py-12 mb-12'>
                    <h1 className='text-3xl my-18' >2. Why are you using firebase? What other option do you implement authentication?</h1>
                    <p className=' text-md p-8'>
                        Because, It provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google,
                        Firebase Authentication is a tool in the User Management and Authentication category of a tech stack.

                        Another options for implement authentications are--- Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
                    </p>
                </div>
                <div className=' text-center border-2 border-zinc-800 rounded-3xl mx-12 py-12 mb-12'>
                    <h1 className='text-3xl my-18' >3. How does the private route work?</h1>
                    <p className=' text-md p-8'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated Logged in.</p>
                </div>
                <div className=' text-center border-2 border-zinc-800 rounded-3xl mx-12 py-12 mb-12'>
                    <h1 className='text-3xl my-18' >4. What is node: How does node work?</h1>
                    <p className=' text-md p-8'>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;