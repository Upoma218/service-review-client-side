import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/HomePage/Home/Home";
import Card from "../Pages/Services/Card";
import ServiceDetails from "../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services/Services";

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
                path: '/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }

])

export default router;