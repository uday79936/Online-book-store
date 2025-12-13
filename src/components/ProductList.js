function ProductList({ addToCart }) {
  return (
    <div className="card">
      <h2>🛍 Products</h2>
      <button onClick={() => addToCart("Product 1")}>
        Add Product 1
      </button>
    </div>
  );
}

export default ProductList;
