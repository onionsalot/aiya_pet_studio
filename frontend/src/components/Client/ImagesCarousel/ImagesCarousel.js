import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import PrevButton from '../CarouselControls/PrevButton/PrevButton'
import NextButton from '../CarouselControls/NextButton/NextButton'
import slide1 from '../../../images/genshin-stickers.jpg'
import slide2 from '../../../images/sticker-sheets.png'
import slide3 from '../../../images/genshin-prints.jpg'
import slide4 from '../../../images/greeting-cards.png'
import "./ImagesCarousel.css"
import { Link } from 'react-router-dom'

const ImagesCarousel = () => {
  const handleDragStart = e => e.preventDefault()
  
  const slides = [
    <div className='relative' onDragStart={handleDragStart}>
      <img className="carousel-image" src={slide1} alt='chibi character stickers'></img>
      <Link to='/app/shop-all' className='carousel-button-link'>Shop All</Link>
    </div>,
    <div className='relative' onDragStart={handleDragStart}>
      <img className="carousel-image" src={slide2} alt='sticker sheets'></img>
      <Link to='/app/stickers' className='carousel-button-link'>Shop Stickers</Link>
    </div>, 
    <div className='relative' onDragStart={handleDragStart}>
      <img className="carousel-image" src={slide3} alt='chibi character art prints'></img>
      <Link to='/app/art-prints' className='carousel-button-link'>Shop Art Prints</Link>
    </div>,
    <div className='relative' onDragStart={handleDragStart}>
      <img className="carousel-image" src={slide4} alt='greeting cards'></img>
      <Link to='/app/greeting-cards' className='carousel-button-link'>Shop Greeting Cards</Link>
    </div>
  ]

  const renderPrevButton = ({ isDisabled }) => {
    return <PrevButton isDisabled={isDisabled} />
  }

  const renderNextButton = ({ isDisabled }) => {
    return <NextButton isDisabled={isDisabled} />
  }

  return (
    <div className='max-w-screen-2xl m-auto my-5 drop-shadow-sm'>
      <AliceCarousel
        mouseTracking
        items={slides}
        controlsStrategy="default"
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        infinite
      />
    </div>
  )
}

export default ImagesCarousel