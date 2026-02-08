import { useState, useEffect } from "react";

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
          <div className="border border-gray-300 rounded-lg p-4" key={product.id}>
            <img src={product.image} alt={product.name} className="h-40 mx-auto" />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-700">Tk{product.price}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Products;
