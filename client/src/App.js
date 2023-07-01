import {
    //createBrowserRouter,
    createHashRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Product/Product";
import Product from "./pages/Products/Products";

//import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import './app.scss';


const Layout = () => {
    return (
        <div className="app">
            {/* <Header /> */}
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}


/* const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products/:id",
                element: <Products />
            },
            {
                path: "/product/:id",
                element: <Product />
            },
        ]
    },
]); */

const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products/:id",
                element: <Products />
            },
            {
                path: "/product/:id",
                element: <Product />
            },
        ]
    },
]);

function App() {

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
