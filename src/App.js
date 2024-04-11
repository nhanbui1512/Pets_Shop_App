import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { DefaultLayout, AdminLayout } from "./Layouts";
import CollectionLayout from "./Layouts/CollectionLayout";
import ProductDetail from "./Pages/ProductDetail";
import {
  Home,
  Blog,
  Cart,
  Login,
  Register,
  DetailBlog,
  Checkout,
  Animal,
  Search,
} from "./Pages";
import { AdminRoutes } from "./Config/routes";

import AllProducts from "./Pages/AllProducts";
import Orders from "./Pages/Orders";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<DefaultLayout />}>
          {/* don't have sidebar */}
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
            <Route path="/blog/:id/*" element={<DetailBlog />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Register />}></Route>
            <Route path="/payment" element={<Checkout />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/orders" element={<Orders />} />
          </Route>

          {/* have sidebar */}
          <Route path="/collections" element={<CollectionLayout />}>
            <Route index element={<AllProducts />}></Route>
          </Route>
          <Route path="/animals" element={<CollectionLayout />}>
            <Route index element={<Animal />}></Route>
          </Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          {AdminRoutes.map((data, index) => (
            <Route
              key={index}
              path={`/admin${data.path}`}
              element={data.element}
            />
          ))}
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
