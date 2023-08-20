import AppWrapper from "./components/AppWrapper";
import ProductDetail from "./components/ProductDetails/ProductDetail";
import Products from "./components/Products/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/LogIn/Login";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Track from "./components/Track/Track";
import Admin from "./components/Admin/Admin";
import ProductsAdmin from "./components/Admin/Products/ProductsAdmin";
import ProductForm from "./components/Admin/Products/ProductForm";
import DeleteProduct from "./components/Admin/Products/DeleteProduct";
import EditProduct from "./components/Admin/Products/EditProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppWrapper />,
      children: [
        {
          path: "",
          element: <Products />,
        },
        {
          path: "product-details/:id",
          element: <ProductDetail />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "track-location",
          element: <Track />,
        },
        {
          path: "admin",
          element: <Admin />,
          children: [
            {
              // index:true,
              path: "",
              element: <ProductsAdmin />,
              children: [
                {
                  path: "addproduct",
                  element: <ProductForm add={true} />,
                },
                {
                  path:'editProduct',
                  element:<EditProduct/>,
                  children:[
                    {
                      path:':id',
                      element:<ProductForm edit={true}/>
                    }
                  ]
                },
                {
                  path:'deleteproduct',
                  element:<DeleteProduct/>
                }
              ],
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
