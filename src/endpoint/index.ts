import axios from "axios"

export function apiClientRequest(url, key, auth, pinata_key = '') {

  const headers = {
    "Content-Type": "application/json",
    "debio-api-key": key
  }

  const axiosInstance =  axios.create({
    baseURL: url,
    headers,
    auth
  })

  return axiosInstance
}
