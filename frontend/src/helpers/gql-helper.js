import axios from "../lib/axios"

const API_URL = process.env.REACT_APP_API_URL + "/graphql"

export const gqlHelper = async (query, input = null) => {
  if (input !== null) query.variables = input
  return axios({
    url: API_URL,
    method: 'POST',
    data: query
  })
}