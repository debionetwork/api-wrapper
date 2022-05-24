import { apiClientRequest } from "./index";

export async function getSignedUrl(url: String, key: String, auth: Object) {
  const result = await apiClientRequest(url, key, auth)
    .get("/pinata-jwt")
  return result
}
