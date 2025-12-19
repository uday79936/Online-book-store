import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>
          🛒 <span>Online Store</span>
        </h1>

        {/* Cart Count Badge */}
        <div className="cart-status">
          Items in Cart: <strong>{cart.length}</strong>
        </div>
      </header>

      {/* Main App */}
      <main className="content">
        <ProductList addToCart={addToCart} />
        <Cart cart={cart} />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Powered by React ⚡ | Designed for a vibrant shopping experience</p>
      </footer>
    </div>
  );
}

export default App;
