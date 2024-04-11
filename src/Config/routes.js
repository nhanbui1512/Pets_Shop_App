import Editor from "../Components/Editor";
import BasicTable from "../Pages/Admin/Products";
import AdminProfile from "../Pages/Admin/Profile";
import UserList from "../Pages/Admin/Users";
import AddProduct from "../Pages/Admin/AddProduct";

export const AdminRoutes = [
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
];
