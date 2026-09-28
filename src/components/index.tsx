import { useEffect, useState } from "react";
import axios from "axios";
import BoxContainer from "./boxContainer";
import "./index.css";

export const LoadMoreProduct = () => {
    const [loading, setLoading] = useState(false);
    const [currentItems, setCurrentItems] = useState(0);
    const [products, setProducts] = useState<{ title: string; price: number; id: number }[]>([]);

    async function fetchProduct() {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://dummyjson.com/products?limit=2&skip=${currentItems}&select=title,price`
            );
            setProducts((prevProducts) => [...prevProducts, ...response.data.products]);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    }

    function handleLoadMore() {
        setCurrentItems((prevItem) => prevItem + 2);
    }

    useEffect(() => {
        fetchProduct();
    }, [currentItems]);

    return (
        <div className="superContainer">
            <div className="container">
                {products.map((item) => (
                    <div key={item.id}>
                        <BoxContainer title={item.title} price={item.price} id={item.id} />
                    </div>
                ))}
                {/* Load More Button */}
                {!loading && (
                    <button onClick={handleLoadMore} className="button">
                        LOAD MORE...
                    </button>
                )}
                {loading && <h1>Loading.. Please wait</h1>}
            </div>
        </div>
    );
};

export default LoadMoreProduct;
