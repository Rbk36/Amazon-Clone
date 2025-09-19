import { Route, Routes } from "react-router";
import Landing from "./pages/Landing/Landing";
import SignUp from "./pages/Auth/SignUp";
import Payments from "./pages/Payments/Payments";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
// import Test from "./pages/ProductDetail/Test";

const RouterPath = () => {
  return (
    <>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default RouterPath;
