import { GET_ALL_PRODUCTS, GET_ONE_PRODUCT, GET_POPULAR_PRODUCT, GET_SEARCH_PRODUCTS } from "../graphql/queries"
import { useGqlQuery } from "./use-gql-query"

export const useProducts = () => {
  return useGqlQuery("get-all-products", GET_ALL_PRODUCTS);
}

export const useProduct = (input = null) => {
  return useGqlQuery(["get-one-product", input?.id], GET_ONE_PRODUCT, input);
}

export const usePopularProduct = () => {
  return useGqlQuery("get-popular-product", GET_POPULAR_PRODUCT);
}

export const useSearchProducts = (input = null) => {
  return useGqlQuery(
    ["get-search-products", input?.searchTerm, input?.sortBy],
    GET_SEARCH_PRODUCTS,
    input
  )
}