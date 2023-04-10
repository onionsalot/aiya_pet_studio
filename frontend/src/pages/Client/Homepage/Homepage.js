import FeaturedPanel from "../../../components/Client/FeaturedPanel/FeaturedPanel"
import ImagesCarousel from "../../../components/Client/ImagesCarousel/ImagesCarousel"
import ReviewPanel from "../../../components/Client/ReviewPanel/ReviewPanel"
import FooterSection from "../../../components/Footer/FootSection"
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
      <FooterSection />
    </div>
  )
}
 
export default Homepage