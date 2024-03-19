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
        <Route path="/">
          <Route index element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>

        <Route path="/collections" element={<CollectionLayout />}>
          <Route index element={<div>List Product</div>}></Route>
        </Route>
      </>
    )
  );
  return (
    <DefaultLayout>
      <RouterProvider router={router} />
    </DefaultLayout>
  );
}

export default App;
