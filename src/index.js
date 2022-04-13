import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router} from "react-router-dom";
import { ProductsProvider } from "./contexts/productsContext";


// Call make Server
makeServer();
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <ProductsProvider>
        <App tab="home" />
      </ProductsProvider>
    </Router>
  </React.StrictMode>)

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <ProductsProvider>
//         <App/>
//       </ProductsProvider>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
