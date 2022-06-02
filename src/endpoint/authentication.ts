import { apiClientRequest } from "./index";

export async function getSignedUrl(url: string, key: string, auth: any) {
  const result = await apiClientRequest(url, key, auth)
    .get("/pinata-jwt")
  return result
}
