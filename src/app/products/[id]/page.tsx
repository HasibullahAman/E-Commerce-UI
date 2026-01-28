import ProductInteraction from "@/components/ProductInteraction";
import { ProductType } from "@/type"
import Image from "next/image";



// Temporary Data
const product: ProductType = {
    id: 1,
    name: "Classic Cotton T-Shirt",
    shortDescription: "Soft everyday cotton tee",
    description: "Classic fit cotton t-shirt designed for daily comfort and breathability. Made from breathable, long-lasting cotton for everyday wear. Ideal for layering or wearing on its own, this tee holds its shape wash after wash. Designed with a modern cut that flatters every silhouette, it pairs easily with jeans or shorts.",
    price: 29.99,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["gray", "purple", "green"],
    images: {
        gray: "/products/1g.png",
        purple: "/products/1p.png",
        green: "/products/1gr.png",
    },
}




const ProductPage = async ({ params, searchParams }: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ color: string; size: string }>
}) => {

    const { size, color } = await searchParams;

    const selectedSize = (size || product.sizes[0] as string)
    const selectedColor = (color || product.colors[0] as string)

    return (
        <div className="flex flex-col gap-4 lg:flex-row md:gap-4  mt-12 ">
            {/* Image */}
            <div className="w-full lg:w-5/12 relative aspect-[2/3]">
                <Image src={product.images[selectedColor]} alt={product.name}
                    fill className="object-contain rounded-md" />
            </div>
            {/* Product Details */}
            <div className="w-full lg:w-7/12 flex flex-col gap-4">
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
                {/* Interaction */}
                <ProductInteraction
                    product={product}
                    selectedSize={selectedSize}
                    selectedColor={selectedColor} />
                {/* Card Info */}
                <div className="flex items-center gap-2 mt-4">
                    <Image src="/klarna.png" alt="Klarna Logo" width={50} height={25} className="rounded-md cursor-pointer" />
                    <Image src="/cards.png" alt="Klarna Logo" width={50} height={25} className="rounded-md cursor-pointer" />
                    <Image src="/stripe.png" alt="Klarna Logo" width={50} height={25} className="rounded-md cursor-pointer" />
                </div>
                <p className="text-gray-500 ttext-xs">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis officia praesentium neque quaerat expedita eligendi reiciendis commodi at sapiente sunt natus non, et porro molestias numquam veritatis aperiam recusandae voluptatibus?
                </p>
                {/* Size Selection */}
            </div>
        </div>
    )
}

export default ProductPage
