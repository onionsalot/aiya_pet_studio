import { useReviewsForHomepage } from "../../../hooks/review-hooks"
import { useMemo } from "react"
import ReviewCard from "../ReviewCard/ReviewCard"
import ReviewsCarousel from "../ReviewsCarousel/ReviewsCarousel"
import { Link } from "react-router-dom"
import ReviewCardSkeleton from "../Skeletons/ReviewCardSkeleton/ReviewCardSkeleton"

const ReviewPanel = () => {
  const reviews = useReviewsForHomepage()
  const seeReviewsButton = (
    <div className="h-60 rounded-md mx-2 flex justify-center items-center">
      <Link to="/app/reviews" className="clickable-span text-lg">See more reviews →</Link>
    </div>
  )

  const content = useMemo(() => {
    if (reviews.isError) return [<h1>Something went wrong!</h1>]
    if (reviews.isLoading)
      return Array(3)
        .fill()
        .map((_, i) => (
          <ReviewCardSkeleton key={i} />
        ))

    const reviewsArray = reviews?.data?.data?.data?.tenNewestReviews.map(
      (review, i) => {
        return <ReviewCard review={review} key={i} />
      })
    return reviewsArray.concat(seeReviewsButton)
  }, [reviews])

  return (
    <>
      <ReviewsCarousel content={content} />
    </>
  )
}

export default ReviewPanel