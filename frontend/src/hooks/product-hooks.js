import { useQuery } from "react-query"
import { GET_ALL_PRODUCTS, GET_ONE_PRODUCT } from "../graphql/queries"
import { gqlHelper } from "../helpers/gql-helper"

export const useProducts = () => {
  return useQuery("get-all-products", () => gqlHelper(GET_ALL_PRODUCTS), {
    staleTime: 3600000,
    retry: false,
    refetchOnWindowFocus: false,
  })
}

export const useProduct = (input = null) => {
  return useQuery(["get-one-product", input?.id], () => gqlHelper(GET_ONE_PRODUCT, input), {
    staleTime: 3600000,
    retry: false,
    refetchOnWindowFocus: false,
  })
}
