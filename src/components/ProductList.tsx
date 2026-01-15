import { ProductsType } from "@/type";
import { Categories } from "./Categories";
import ProductCard from "./ProductCard";


// Temporary 
const products: ProductsType = [
    {
        id: 1,
        name: "Classic Cotton T-Shirt",
        shortDescription: "Soft everyday cotton tee",
        description: "Classic fit cotton t-shirt designed for daily comfort and breathability.",
        price: 29.99,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/1g.png",
            purple: "/products/1p.png",
            green: "/products/1gr.png",
        },
    },
    {
        id: 2,
        name: "Slim Fit Polo Shirt",
        shortDescription: "Elegant slim fit polo",
        description: "Modern slim fit polo shirt suitable for casual and semi-formal wear.",
        price: 39.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["green", "gray"],
        images: {
            green: "/products/2g.png",
            gray: "/products/2gr.png",
        },
    },
    {
        id: 3,
        name: "Hooded Sweatshirt",
        shortDescription: "Warm and cozy hoodie",
        description: "Comfortable hooded sweatshirt made with premium fleece fabric.",
        price: 54.99,
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["green", "blue", "black"],
        images: {
            green: "/products/3b.png",
            blue: "/products/3bl.png",
            black: "/products/3b.png",
        },
    },
    {
        id: 4,
        name: "Denim Jacket",
        shortDescription: "Timeless denim style",
        description: "Durable denim jacket with a classic cut and modern finish.",
        price: 79.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["white", "pink"],
        images: {
            white: "/products/4p.png",
            pink: "/products/4w.png",
        },
    },
    {
        id: 5,
        name: "Casual Chino Pants",
        shortDescription: "Comfortable everyday chinos",
        description: "Lightweight chino pants perfect for work or casual outings.",
        price: 44.99,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["red", "orange", "black"],
        images: {
            red: "/products/5bl.png",
            orange: "/products/5o.png",
            black: "/products/5r.png",
        },
    },
    {
        id: 6,
        name: "Running Sports T-Shirt",
        shortDescription: "Breathable sportswear",
        description: "Quick-dry sports t-shirt designed for training and running.",
        price: 24.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["gray", "white"],
        images: {
            gray: "/products/6g.png",
            white: "/products/6w.png",
        },
    },
    {
        id: 7,
        name: "Formal Dress Shirt",
        shortDescription: "Sharp formal look",
        description: "Long sleeve formal shirt ideal for office and special occasions.",
        price: 49.99,
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["gray", "pink"],
        images: {
            gray: "/products/7g.png",
            pink: "/products/7p.png",
        },
    },
    {
        id: 8,
        name: "Winter Wool Sweater",
        shortDescription: "Warm wool sweater",
        description: "High-quality wool sweater to keep you warm in cold weather.",
        price: 64.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["blue", "green"],
        images: {
            blue: "/products/8b.png",
            green: "/products/8gr.png",
        },
    },
];




const ProductList = () => {
    return (
        <div className="w-full">
            <Categories />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </div>
    )
}

export default ProductList;
