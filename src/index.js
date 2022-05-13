import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router} from "react-router-dom";
import { ProductsProvider } from "./contexts/productsContext";
import { AuthenticationProvider } from "./contexts";
import { WishListProvider } from "./contexts/wishlistContext";
import { CartProvider } from "./contexts/cartContext";

// Call make Server
makeServer();
const container = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthenticationProvider>
        <ProductsProvider>
          <WishListProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </WishListProvider>
        </ProductsProvider>
      </AuthenticationProvider>
    </Router>
  </React.StrictMode>, container)
