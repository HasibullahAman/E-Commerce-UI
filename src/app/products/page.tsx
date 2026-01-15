import ProductList from "@/components/ProductList";

const ProducstPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ category: string }>;
}) => {
    const { category } = await searchParams;
    return (
        <div>
            <ProductList category={category} params="products" />
        </div>
    )
}

export default ProducstPage
