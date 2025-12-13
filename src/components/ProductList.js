import React from "react";

const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Mobile", price: 30000 },
  { id: 3, name: "Headphones", price: 2000 }
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <span>
            {product.name} - ₹{product.price}
          </span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
