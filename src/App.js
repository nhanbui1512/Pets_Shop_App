import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { DefaultLayout } from "./Layouts";
import { Home, Cart } from "./Pages";
import CollectionLayout from "./Layouts/CollectionLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<DefaultLayout />}>
          {/* don't have sidebar */}
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Route>

          {/* have sidebar */}
          <Route path="/collections" element={<CollectionLayout />}>
            <Route index element={<div>List Product</div>}></Route>
          </Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
