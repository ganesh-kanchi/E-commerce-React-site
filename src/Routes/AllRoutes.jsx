import { Login, Logout, SignUp } from "../pages/Auth";
import Mockman from "mockman-js";
import { WishList } from "../pages/WishList/WishList";
import { Home, ProductsPage, Cart } from "../pages";
import { Routes, Route } from "react-router-dom"
import { LockedRoute } from "./LockedRoutes";
import { SingleProductPage } from "../pages/SingleProductPage/SingleProductPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/wishlist" element={<LockedRoute><WishList /></LockedRoute>} />
        <Route path="/cart" element={<LockedRoute><Cart /></LockedRoute>} />
        <Route path="/products/:productId" element={<SingleProductPage />} />
      </Routes>
  )
}

export { AllRoutes }