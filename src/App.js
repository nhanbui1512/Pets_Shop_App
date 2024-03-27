import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { DefaultLayout, AdminLayout } from "./Layouts";
import CollectionLayout from "./Layouts/CollectionLayout";
import ListProduct from "./Pages/ListProduct";
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
} from "./Pages";
import Editor from "./Components/Editor";

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
            <Route path="/product" element={<ProductDetail />}></Route>
            <Route path="/blog/:id/*" element={<DetailBlog />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Register />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Route>

          {/* have sidebar */}
          <Route path="/collections" element={<CollectionLayout />}>
            <Route index element={<ListProduct />}></Route>
          </Route>
          <Route path="/animals" element={<CollectionLayout />}>
            <Route index element={<Animal />}></Route>
          </Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<div>Root</div>}></Route>
          <Route path="/admin/profile" element={<div>Profile</div>}></Route>
          <Route path="/admin/edit" element={<Editor />}></Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
