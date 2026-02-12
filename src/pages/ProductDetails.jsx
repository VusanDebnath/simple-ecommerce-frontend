import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })

      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  // Handle loading state 1
  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  // Handle error state 2
  if (error || !product) {
    return <div className="p-4">Error fetching product details.</div>;
  }

  // Render product details 3
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <img
        src={product.image}
        alt={product.title}
        className="h-72 mx-auto object-contain"
      />

      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-xl font-semibold mt-4">${product.price}</p>

        <button className="mt-4 bg-black text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
