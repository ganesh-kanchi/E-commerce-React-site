import { Login, Logout, SignUp } from "../pages/Auth";
import Mockman from "mockman-js";
import { WishList } from "../pages/WishList/WishList";
import { Home, ProductsPage } from "../pages";
import {Routes, Route} from "react-router-dom"
import { LockedRoute } from "./LockedRoutes";

const AllRoutes = () => {
    return (
        <Routes>
        <Route key="homepage" path="/" element={<Home/>} />
        <Route key="mockman" path="/mockman" element={<Mockman/>} />
        <Route key="products" path="/products" element={<ProductsPage />} />
        <Route key="login" path="/login" element={<Login/>} />
        <Route key="logout" path="/logout" element={<Logout/>} />
        <Route key="signup" path="/sign-up" element={<SignUp/>} />
        <Route key="WishList" path="/wishlist" element={<LockedRoute><WishList/></LockedRoute>}/>
        <Route key="Cart" path="/cart" element={<LockedRoute><h2>Cart</h2></LockedRoute>}/>
        
      </Routes>
    )
}

export { AllRoutes }