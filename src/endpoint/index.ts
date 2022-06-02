import axios from "axios"

export function apiClientRequest(url, key, auth) {

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
