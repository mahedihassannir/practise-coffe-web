import { useEffect, useState } from 'react';

const useProducts = () => {
    const authToken = localStorage.getItem("userToken");
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`http://localhost:5000/api/v1/user/products`, {
                    method: 'GET',
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (authToken) {
            fetchProducts();
        }

    }, [authToken]);

    // console.log(products);
    return { products, loading, error };
};

export default useProducts;
