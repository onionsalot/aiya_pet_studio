import { useQuery } from "react-query"
import { gqlHelper } from "../helpers/gql-helper"

export const useGqlQuery = (key, query, input = null, config = {}) => {
  return useQuery(
    key,
    async () => {
      const data = await gqlHelper(query, input);

      // Check for errors in the data object
      if (data?.data?.errors) {
        // Throw a custom error with the error message
        throw new Error(data.data.errors[0]?.message || "An error occurred");
      }

      return data
    },
    {
      staleTime: 3600000,
      retry: false,
      refetchOnWindowFocus: false,
      ...config,
    }
  )
}