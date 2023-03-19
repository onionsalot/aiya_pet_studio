import { useQuery } from "react-query"
import { GET_ALL_FEATURED_PRODUCTS } from "../graphql/queries"
import { gqlHelper } from "../helpers/gql-helper"

export const useFeaturedProducts = () => {
  return useQuery("get-all-featured-products", () => gqlHelper(GET_ALL_FEATURED_PRODUCTS), {
    staleTime: 3600000,
    retry: false,
    refetchOnWindowFocus: false,
  })
}
