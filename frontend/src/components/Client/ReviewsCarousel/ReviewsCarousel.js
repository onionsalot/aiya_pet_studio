import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"

const ReviewsCarousel = ({ content }) => {

  const responsive = {
    0: { items: 1 },
    640: { items: 2 },
    1024: { items: 3, itemsFit: 'contain' },
  }

  return (
    <div className='max-w-6xl m-auto mt-4 drop-shadow-sm'>
      <div className='w-10/12 sm:w-full m-auto'>
        <AliceCarousel
          mouseTracking
          items={content}
          responsive={responsive}
          controlsStrategy="default"
        />
      </div>
    </div>
  )
}

export default ReviewsCarousel