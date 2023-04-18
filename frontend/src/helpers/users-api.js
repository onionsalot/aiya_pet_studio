import axios from "../lib/axios"

const BASE_URL = process.env.REACT_APP_API_URL + "/auth/"

export function getCurrentUser() {
  if (localStorage.getItem('isLoggedIn') !== 'true') return null
  return sendRequest(`${BASE_URL}current_user/index`)
}

export function signup(userData) {
  return sendRequest(`${BASE_URL}`, 'POST', userData)
} 

export function login(credentials) {
  return sendRequest(`${BASE_URL}sign_in`, 'POST', credentials)
}

export function logout() {
  return sendRequest(`${BASE_URL}sign_out`, 'DELETE')
}

export function resetPassword(payload) {
  return sendRequest(`${BASE_URL}password`, 'PUT', payload)
}

export function resetRequest(userData) {
  return sendRequest(`${BASE_URL}password`, 'POST', userData)
}

export function checkResetToken(token) {
  return sendRequest(`${BASE_URL}password/check_token`, 'POST', token)
}

export function confirmation(token) {
  return sendRequest(`${BASE_URL}confirmation`, 'GET', null, token)
}

async function sendRequest(url, method = 'GET', payload = null, headers = null) {
  let response = null
  try {
    if (method === 'GET') {
      response = axios.get(url, headers)
    } else if (method === 'POST') {
      response = axios.post(url, payload)
    } else if (method === 'DELETE') {
      response = axios.delete(url)
    } else if (method === 'PUT') {
      response = axios.put(url, payload, headers)
    }
  } catch (error) {
    return error.response
  }
  return response
}