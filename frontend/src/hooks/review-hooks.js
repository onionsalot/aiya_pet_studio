import { useQuery } from "react-query"
import { GET_REVIEWS_FOR_HOMEPAGE } from "../graphql/queries"
import { gqlHelper } from "../helpers/gql-helper"

export const useReviewsForHomepage = () => {
  return useQuery("get-ten-newest-reviews", () => gqlHelper(GET_REVIEWS_FOR_HOMEPAGE), {
    staleTime: 3600000,
    retry: false,
    refetchOnWindowFocus: false,
  })
}

