import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Product from "./pages/products/Product";
import Root from "./pages/layout/Root";
import ErrorPage from "./pages/errors/ErrorPage";
import ProductDetail from "./pages/products/ProductDetail";

const router = createBrowserRouter([
    // list all your routes here
    // all paths in child routes are siblings, and they are relative to the parent route path "/"
    {
        path: "/", // absolute path starts with "/", if not, it's relative path
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                // default route if the parent route is active
                index: true,
                // alternatively
                // path: "/",
                element: <HomePage/>,
            },
            {
                path: "/products",
                element: <Product/>
            },
            {
                path: "/products/:productId",
                element: <ProductDetail/>
            }
        ]
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
