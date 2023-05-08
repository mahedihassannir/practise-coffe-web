import {
    createBrowserRouter,
    Router,
    RouterProvider,
} from "react-router-dom";
import Layout from "../Layout.jsx/Layout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import Updatecoffee from "../pages/Updatecoffee";


let router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/coffee')
            },

            {
                path: "updatecoffee",
                element: <Updatecoffee></Updatecoffee>
            },

            {
                path: "addcoffee",
                element: <AddCoffee></AddCoffee>
            },







        ]
    }
])


export default router