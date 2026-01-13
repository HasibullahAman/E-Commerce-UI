import { ProductsType } from "@/type";
import { Categories } from "./Categories";
import { ProductCard } from "./ProductCard";


// Temporary 
const products: ProductsType = [
    {
        id: 1,
        name: "Classic Cotton T-Shirt",
        shortDescription: "Soft everyday cotton tee",
        description: "Classic fit cotton t-shirt designed for daily comfort and breathability.",
        price: 29.99,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["black", "white", "navy"],
        images: {
            black: "/products/2/black.png",
            white: "/products/2/white.png",
            navy: "/products/2/navy.png",
        },
    },
    {
        id: 2,
        name: "Slim Fit Polo Shirt",
        shortDescription: "Elegant slim fit polo",
        description: "Modern slim fit polo shirt suitable for casual and semi-formal wear.",
        price: 39.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["blue", "gray", "white"],
        images: {
            blue: "/products/3/blue.png",
            gray: "/products/3/gray.png",
            white: "/products/3/white.png",
        },
    },
    {
        id: 3,
        name: "Hooded Sweatshirt",
        shortDescription: "Warm and cozy hoodie",
        description: "Comfortable hooded sweatshirt made with premium fleece fabric.",
        price: 54.99,
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["black", "olive", "maroon"],
        images: {
            black: "/products/4/black.png",
            olive: "/products/4/olive.png",
            maroon: "/products/4/maroon.png",
        },
    },
    {
        id: 4,
        name: "Denim Jacket",
        shortDescription: "Timeless denim style",
        description: "Durable denim jacket with a classic cut and modern finish.",
        price: 79.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["blue", "darkblue"],
        images: {
            blue: "/products/5/blue.png",
            darkblue: "/products/5/darkblue.png",
        },
    },
    {
        id: 5,
        name: "Casual Chino Pants",
        shortDescription: "Comfortable everyday chinos",
        description: "Lightweight chino pants perfect for work or casual outings.",
        price: 44.99,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["beige", "black", "gray"],
        images: {
            beige: "/products/6/beige.png",
            black: "/products/6/black.png",
            gray: "/products/6/gray.png",
        },
    },
    {
        id: 6,
        name: "Running Sports T-Shirt",
        shortDescription: "Breathable sportswear",
        description: "Quick-dry sports t-shirt designed for training and running.",
        price: 24.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["red", "black", "neon"],
        images: {
            red: "/products/7/red.png",
            black: "/products/7/black.png",
            neon: "/products/7/neon.png",
        },
    },
    {
        id: 7,
        name: "Formal Dress Shirt",
        shortDescription: "Sharp formal look",
        description: "Long sleeve formal shirt ideal for office and special occasions.",
        price: 49.99,
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["white", "skyblue"],
        images: {
            white: "/products/8/white.png",
            skyblue: "/products/8/skyblue.png",
        },
    },
    {
        id: 8,
        name: "Winter Wool Sweater",
        shortDescription: "Warm wool sweater",
        description: "High-quality wool sweater to keep you warm in cold weather.",
        price: 64.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["brown", "gray", "cream"],
        images: {
            brown: "/products/9/brown.png",
            gray: "/products/9/gray.png",
            cream: "/products/9/cream.png",
        },
    },
    {
        id: 9,
        name: "Relaxed Fit Shorts",
        shortDescription: "Comfortable summer shorts",
        description: "Relaxed fit shorts perfect for home, gym, or casual walks.",
        price: 19.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "gray"],
        images: {
            black: "/products/10/black.png",
            gray: "/products/10/gray.png",
        },
    },
    {
        id: 11,
        name: "Lightweight Windbreaker",
        shortDescription: "Stylish wind protection",
        description: "Lightweight windbreaker jacket suitable for travel and outdoor use.",
        price: 69.99,
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["green", "black", "blue"],
        images: {
            green: "/products/11/green.png",
            black: "/products/11/black.png",
            blue: "/products/11/blue.png",
        },
    },
];




export const ProductList = () => {
    return (
        <div className="w-full">
            <Categories />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
                {products.map(product => (
                    <ProductCard key={product.id} product={products} />
                ))}
            </div>
        </div>
    )
}


