import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <h1 className="title">🛒 Online Store</h1>

      <div className="content">
        <ProductList addToCart={addToCart} />
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default App;
