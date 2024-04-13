import Editor from "../Components/Editor";
import BasicTable from "../Pages/Admin/Products";
import AdminProfile from "../Pages/Admin/Profile";
import UserList from "../Pages/Admin/Users";
import AddProduct from "../Pages/Admin/AddProduct";
import AddBlog from "../Pages/Admin/AddBlog";
import ListOrder from "../Pages/Admin/ListOrder";

export const adminRoutes = [
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
  {
    path: "/addproduct",
    element: <AddProduct />,
  },
  {
    path: "/addblog",
    element: <AddBlog />,
  },
  {
    path: "/orders",
    element: <ListOrder />,
  },
];

export const userRoutes = [
  {
    path: "/",
    element: <div>Root</div>,
  },
];
