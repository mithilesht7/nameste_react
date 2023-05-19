import React, { Fragment } from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/AboutUs";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/ContactUs";
import Services from "./components/Services";
import RestaurantDetails from "./components/RestaurantDetails";
//import MyNewComp from "./components/MyNewComp";

const Wrapper = () => {
    return (
        <div className="wrapper">

            <Header />
            <Outlet />
            <Footer />

        </div>
    )

}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Wrapper />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
                errorElement: <Error />
            },
            {
                path: "/about",
                element: <About />,
                errorElement: <Error />
            },
            {
                path: "/contact",
                element: <Contact />,
                errorElement: <Error />
            },
            {
                path: "/services",
                element: <Services />,
                errorElement: <Error />
            },
            {
                path: "/restaurant-details/:id",
                element: <RestaurantDetails />
            },
        ]

    },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
