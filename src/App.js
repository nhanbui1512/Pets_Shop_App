import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { DefaultLayout, AdminLayout, UserLayout } from "./Layouts";
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
import { adminRoutes, userRoutes } from "./Config/routes";

import AllProducts from "./Pages/AllProducts";
import Orders from "./Pages/Orders";
import Collection from "./Pages/Collection";
import BreedDetail from "./Pages/BreedDetail";

import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

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
            <Route path="/animals" element={<Animal />}></Route>
            <Route path="/animals/:id" element={<BreedDetail />}></Route>
          </Route>

          {/* have sidebar */}
          <Route path="/collections" element={<CollectionLayout />}>
            <Route index element={<AllProducts />}></Route>
            <Route path="/collections/:id" element={<Collection />}></Route>
          </Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          {adminRoutes.map((data, index) => (
            <Route
              key={index}
              path={`/admin${data.path}`}
              element={data.element}
            />
          ))}
        </Route>

        <Route path="/user" element={<UserLayout />}>
          {userRoutes.map((item, index) => (
            <Route
              key={index}
              path={`/user${item.path}`}
              element={item.element}
            />
          ))}
        </Route>
      </>
    )
  );
  return (
    <>
      <ScrollToTop
        className="scroll-btn"
        smooth
        component={<FontAwesomeIcon icon={faArrowUp} />}
      />
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        draggable
      />
    </>
  );
}

export default App;
