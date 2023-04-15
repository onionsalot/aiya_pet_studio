import FeaturedProductCard from "../FeaturedProductCard/FeaturedProductCard";
import FeaturedProductCardSkeleton from "../Skeletons/FeaturedProductCardSkeleton/FeaturedProductCardSkeleton";
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
          <FeaturedProductCardSkeleton key={i} />
        ));
    return featuredProducts?.data?.data?.data?.featuredProducts.map(
      (featuredProduct, i) => <FeaturedProductCard product={featuredProduct.product} key={i} />
    );
  }, [featuredProducts]);

  return (
    <div className="w-full mx-auto flex flex-wrap text-center max-w-7xl">
      {content}
    </div>
  );
};

export default FeaturedPanel;
