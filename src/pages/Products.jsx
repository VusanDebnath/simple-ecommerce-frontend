import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      {
        products.map(product=>(
          <ProductCard key={product.id} product={product} />
        ))
      }
    </div>
  );
};

export default Products;
