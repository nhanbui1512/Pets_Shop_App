import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { DefaultLayout } from "./Layouts";
import { Home, Blog, Cart, DetailBlog } from "./Pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/detailblog" element={<DetailBlog />}></Route>
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
