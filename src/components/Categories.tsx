"use client";

import {
    Footprints,
    Glasses,
    Briefcase,
    Shirt,
    ShoppingBasket,
    Hand,
    Venus,
    Router
} from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
    {
        name: "All",
        icon: <ShoppingBasket className="w-4 h-4" />,
        slug: "all"
    },
    {
        name: "T-shirts",
        icon: <Shirt className="w-4 h-4" />,
        slug: "t-shirts"
    },
    {
        name: "Formal Wear",
        icon: <Briefcase className="w-4 h-4" />,
        slug: "formal-wear"
    },
    {
        name: "Footwear",
        icon: <Footprints className="w-4 h-4" />,
        slug: "footwear"
    },
    {
        name: "Accessories",
        icon: <Glasses className="w-4 h-4" />,
        slug: "accessories"
    },
    {
        name: "Handwear",
        icon: <Hand className="w-4 h-4" />,
        slug: "handwear"
    },
    {
        name: "Women's",
        icon: <Venus className="w-4 h-4" />,
        slug: "womens-clothing"
    },

]

export const Categories = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const selectedCategory = searchParams.get("category");

    const handleChange = (value: string | null) => {
        const params = new URLSearchParams(searchParams);
        params.set("category", value || "all");
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 bg-gray-100 p-2
        rounded-lg  mb-4 text-sm">
            {categories.map(category => (
                <div className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md
                 ${category.slug === selectedCategory ? "bg-white" : "text-gray-500"}`}
                    key={category.name}
                    onClick={() => handleChange(category.slug)}
                >
                    {category.icon}
                    {category.name}
                </div>
            ))}
        </div>
    )
}
