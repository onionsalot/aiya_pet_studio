import FeaturedPanel from "../../../components/Client/FeaturedPanel/FeaturedPanel"
import ImagesCarousel from "../../../components/Client/ImagesCarousel/ImagesCarousel"
import ReviewPanel from "../../../components/Client/ReviewPanel/ReviewPanel"
import PopularProductCard from "../../../components/Client/PopularProductCard/PopularProductCard"

const Homepage = () => {
  return (
    <div>
      <ImagesCarousel />
      <h1 className="section-h1">Featured</h1>
      <FeaturedPanel />
      <h1 className="section-h1">Popular</h1>
      <PopularProductCard />
      <h1 className="section-h1">Our Reviews</h1>
      <ReviewPanel />
    </div>
  )
}
 
export default Homepage