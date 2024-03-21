import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { DefaultLayout } from "./Layouts";
import CollectionLayout from "./Layouts/CollectionLayout";
import { Home, Blog, Cart } from "./Pages";
import ListProduct from "./Pages/ListProduct";

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
          </Route>

          {/* have sidebar */}
          <Route path="/collections" element={<CollectionLayout />}>
            <Route index element={<ListProduct />}></Route>
          </Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
