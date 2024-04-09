import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
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
} from "./Pages";
import Editor from "./Components/Editor";
import BasicTable from "./Pages/Admin/Products";
import AdminProfile from "./Pages/Admin/Profile";
import UserList from "./Pages/Admin/Users";
import AllProducts from "./Pages/AllProducts";

const adminPages = [
  {
    path: "/",
    element: <div>Root</div>,
  },
  {
    path: "/profile",
    element: <AdminProfile />,
  },
  {
    path: "/edit",
    element: <Editor />,
  },
  {
    path: "/products",
    element: <BasicTable />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
];

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
            <Route path="/payment" element={<Checkout />}></Route>
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
          {adminPages.map((data, index) => (
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
  return <RouterProvider router={router} />;
}

export default App;
