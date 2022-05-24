import axios from "axios"

export function apiClientRequest(url, api_key, auth, pinata_key ="" ) {

  const headers = {
    "Content-Type": "application/json",
    "debio-api-key": api_key,
    "secret": pinata_key
  }

  const axiosInstance =  axios.create({
    baseURL: url,
    headers,
    auth
  })

  return axiosInstance
}
