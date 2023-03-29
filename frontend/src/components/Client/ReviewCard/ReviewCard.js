import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom"

const ReviewCard = ({ review }) => {
  const sampleImage = "https://i.etsystatic.com/24762991/r/il/9f62c0/3430721950/il_794xN.3430721950_4c7c.jpg"

  const ratingProps = {
    size: 20,
    value: review.rating,
    color: "lightgray",
    edit: false, 
    isHalf: false,
  }

  return (
    <div className="h-60 rounded-md mx-2 p-2 bg-white select-none border-2 border-gray-300 text-gray-700">
      <div className="flex flex-row">
        <img src={sampleImage} className="object-cover w-44 h-32 rounded-md" draggable="false" />
        <div className="flex flex-col grow items-center justify-around m-1">
          <div className="text-center clickable-span">
            <Link to="">{review.product.name}</Link>
          </div>
          <div>
            <ReactStars {...ratingProps} />
          </div>
          <div>
            - {review.reviewer}
          </div>
        </div>
      </div>
      <div className="p-2">
        {review.review}
      </div>
    </div>
  )
}

export default ReviewCard