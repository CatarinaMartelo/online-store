import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart.js";
import Hero from "./components/Hero";
import { Footer } from "./components/Hero/styles";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/Products/ProductDetails";
import ProductListing from "./components/Products/ProductListing";

const App = () => {
  return (
    <div className="App">
      <Router>
      <Navbar/>
    
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products" element={<ProductListing/>}/>
        <Route path="/product/:productId" element={<ProductDetails/>}/>
        <Route>404 Not Found</Route>

      </Routes>
      
        </Router>
      
      </div>
    
  );
};

export default App;