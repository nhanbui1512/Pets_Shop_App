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
  ChatBox,
  Inbox,
  Bills,
  Dashboard,
  OrderDetail,
  UpdateBreed,
} from "../Pages/Admin";

export const adminRoutes = [
  {
    path: "/",
    element: <Dashboard />,
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
    path: "/orders/:id",
    element: <OrderDetail />,
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
    path: "/breeds/:id",
    element: <UpdateBreed />,
  },
  {
    path: "/addbreed",
    element: <AddBreed />,
  },
  {
    path: "/inbox",
    element: <Inbox />,
  },
  {
    path: "/inbox/:id",
    element: <ChatBox />,
  },
  {
    path: "/bill",
    element: <Bills />,
  },
  {
    path: "/bill/:id",
    element: <OrderDetail bill />,
  },
];

export const userRoutes = [
  {
    path: "/",
    element: <div>Root</div>,
  },
  {
    path: "/profile",
    element: <AdminProfile />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/orders",
    element: <div>orders</div>,
  },
  {
    path: "/bills",
    element: <div>bills</div>,
  },
];
