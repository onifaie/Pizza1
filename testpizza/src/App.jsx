import "./App";
import Layout from "./componets/Layout";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Admin from "./componets/Admin";
import Cheakout from "./componets/Cheakout";
import ProductDeatils from "./componets/ProductDeatils";
import OrderDetails from "./componets/OrderDetails";
import Login from "./componets/Login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="products/:productId" element={<Cart />} />
        <Route path="order" element={<OrderDetails />} />
        <Route path="admin" element={<Admin />} />
        <Route path="Login" element={<Login />} />
        <Route path="cheakout" element={<Cheakout />} />

        <Route path="cheakout" element={<Cheakout />} />
        <Route path="productDetails/:productId" element={<ProductDeatils />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
export default App;
