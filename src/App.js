import "./App.css";
import { Home, ProductsPage } from "./pages/index";
import {Routes, Route} from "react-router-dom";
import { Navbar,Footer } from "./components/index";
import { Login, Logout, SignUp } from "./pages/auth/index";


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
