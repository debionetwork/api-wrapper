import { apiClientRequest } from "./index";

export async function healthCheck(url: String, api_key: String, auth: Object, pinata_key) {
  const result = await apiClientRequest(url, api_key, auth, pinata_key)
    .get("/health")
  return result
}
