import { useQuery } from "react-query"
import { GET_ALL_USERS, GET_ONE_USER } from "../graphql/queries"
import { gqlHelper } from "../helpers/gql-helper"
import { getCurrentUser } from "../helpers/users-api"
import { useBoundStore } from '../stores/useBoundStore'

export const useCurrentUser = () => {
  const setUser = useBoundStore((state) => state.setUser)

  return useQuery('user', getCurrentUser, {
    onSuccess: (response) => {
      if (response?.data?.message === "Session found.") {
        setUser(response?.data?.data)
      }
    },
    staleTime: 3600000,
    retry: false,
    refetchOnWindowFocus: true,
    onError: (e) => {
      setUser(null)
      localStorage.removeItem('isLoggedIn')
    }
  })
}

export const useUsers = () => {
  return useQuery("get-all-users", () => gqlHelper(GET_ALL_USERS), {
    staleTime: 3600000,
    retry: false,
    refetchOnWindowFocus: false,
  })
}

export const useUser = (input = null) => {
  return useQuery(["get-one-user", input?.id], () => gqlHelper(GET_ONE_USER, input), {
    staleTime: 3600000,
    retry: false,
    refetchOnWindowFocus: false,
  })
}