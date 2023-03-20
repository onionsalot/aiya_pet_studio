import FeaturedProductCard from "../FeaturedProductCard/FeaturedProductCard";

const FeaturedPanel = () => {
  return (
    <div class="w-full mx-auto flex flex-wrap text-center max-w-6xl">
      <FeaturedProductCard />
      <FeaturedProductCard />
      <FeaturedProductCard />
      <FeaturedProductCard />
    </div>
  );
}
 
export default FeaturedPanel;