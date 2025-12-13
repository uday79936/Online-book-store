import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">
      <h1>🛒 Online Store</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
