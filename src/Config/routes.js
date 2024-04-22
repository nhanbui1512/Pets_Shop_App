import {
  BasicTable,
  AdminProfile,
  UserList,
  AddProduct,
  AddBlog,
  ListOrder,
  UpdateProduct,
  ListBlog,
  UpdateBlog,
  Password,
  ListBreed,
  AddBreed,
} from "../Pages/Admin";

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
  {
    path: "/products/:id",
    element: <UpdateProduct />,
  },
  {
    path: "/blogs",
    element: <ListBlog />,
  },
  {
    path: "/blogs/:id",
    element: <UpdateBlog />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/breeds",
    element: <ListBreed />,
  },
  {
    path: "/addbreed",
    element: <AddBreed />,
  },
];

export const userRoutes = [
  {
    path: "/",
    element: <div>Root</div>,
  },
];
