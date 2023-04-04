import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../Skeletons/ProductCardSkeleton/ProductCardSkeleton";
import { useFeaturedProducts } from "../../../hooks/featured-product-hooks";
import { useMemo } from "react";

const FeaturedPanel = () => {
  const featuredProducts = useFeaturedProducts();

  const content = useMemo(() => {
    if (featuredProducts.isError) return <h1>Something went wrong!</h1>;
    if (featuredProducts.isLoading)
      return Array(4)
        .fill()
        .map((_, i) => (
          <ProductCardSkeleton key={i} />
        ));
    return featuredProducts?.data?.data?.data?.featuredProducts.map(
      (featuredProduct, i) => <ProductCard product={featuredProduct.product} key={i} />
    );
  }, [featuredProducts]);

  return (
    <div className="w-full mx-auto flex flex-wrap text-center max-w-7xl">
      {content}
    </div>
  );
};

export default FeaturedPanel;
