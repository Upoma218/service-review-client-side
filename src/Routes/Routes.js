import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/HomePage/Home/Home";
import Card from "../Pages/Services/Card";
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
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }

])

export default router;