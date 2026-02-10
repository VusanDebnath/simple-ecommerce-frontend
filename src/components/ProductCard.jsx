import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4" key={product.id}>
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-700">Tk{product.price}</p>
      <Link
        to={`/products/${product.id}`}
        className="text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
