import axios from "../lib/axios"
const API_URL = `http://localhost:3000/graphql`

export const gqlHelper = async (query, input = null) => {
  if (input !== null) query.variables = input
  return axios({
    url: API_URL,
    method: 'POST',
    data: query
  })
}