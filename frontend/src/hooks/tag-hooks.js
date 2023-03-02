import { useQuery } from "react-query"
import { GET_ALL_TAGS, GET_ONE_TAG } from "../graphql/queries"
import { gqlHelper } from "../helpers/gql-helper"

export const useTags = () => {
  return useQuery("get-all-tags", () => gqlHelper(GET_ALL_TAGS), {
    staleTime: 3600000,
    retry: false,
    refetchOnWindowFocus: false,
  })
}

// export const useTag = (input = null) => {
//   return useQuery(["get-one-tag", input?.id], () => gqlHelper(GET_ONE_TAG, input), {
//     staleTime: 3600000,
//     retry: false,
//     refetchOnWindowFocus: false,
//   })
// }