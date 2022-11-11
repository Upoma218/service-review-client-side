import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import CustomerReviews from "../Pages/CustomerReviews/CustomerReviews";
import MyReviews from "../Pages/CustomerReviews/MyReviews/MyReviews";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import AddServices from "../Pages/Services/AddServices/AddServices";
import Card from "../Pages/Services/Card";
import ServiceDetails from "../Pages/Services/ServiceDetails/ServiceDetails";
import SignUp from "../Pages/SignUp/SignUp";
import UpdateReviews from "../Pages/UpdateReviews";
import PrivateRoute from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/card',
                element: <Card></Card>
            },
            {
                path: '/about',
                element:<About></About>
            },
            
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/services/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://flora-the-chef-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/cardReview',
                element: <CustomerReviews></CustomerReviews>,
                loader: () => fetch('https://flora-the-chef-server.vercel.app/cardReviews')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
                
            },
            {
                path: '/updateReview/:id',
                element: <UpdateReviews></UpdateReviews>,
                loader: ({params}) => fetch(`https://flora-the-chef-server.vercel.app/cardReviews/${params.id}`)
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
                
            }
        ]
    }

])

export default router;