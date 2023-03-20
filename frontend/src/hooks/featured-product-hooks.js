import { useQuery } from "react-query"
import { GET_ALL_FEATURED_PRODUCTS, GET_ONE_FEATURED_PRODUCT } from "../graphql/queries"
import { gqlHelper } from "../helpers/gql-helper"

export const useFeaturedProducts = () => {
  return useQuery("get-all-featured-products", () => gqlHelper(GET_ALL_FEATURED_PRODUCTS), {
    staleTime: 3600000,
    retry: false,
    refetchOnWindowFocus: false,
  })
}

export const useFeaturedProduct = (input = null) => {
  return useQuery(["get-one-featured-product", input?.id], () => gqlHelper(GET_ONE_FEATURED_PRODUCT, input), {
    staleTime: 3600000,
    retry: false,
    refetchOnWindowFocus: false,
  })
}
