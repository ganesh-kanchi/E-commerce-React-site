import "./App.css";
import { Home } from "./pages/Home/Home";
import {Routes, Route} from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";
import { Login } from "./pages/auth/Login";
import { Logout } from "./pages/auth/Logout";
import { SignUp } from "./pages/auth/Sign-up";


function App() {
  return <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
    <Footer/>
    
  </div>
}

export default App;
