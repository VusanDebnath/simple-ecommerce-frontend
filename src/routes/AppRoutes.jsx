import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products/>} />    
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDetails />} />

            <Route path="/login" element={<Login />} />

        </Routes>
    )
};

export default AppRoutes;