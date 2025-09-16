import { Route, Routes } from "react-router";
import Landing from "../pages/Landing/Landing";
import SignUp from "../pages/Auth/SignUp";
import Payments from "../pages/Payments/Payments";
import Orders from "../pages/Orders/Orders";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route index element={<Landing />} />
          <Route path="/auth" element={<SignUp />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
