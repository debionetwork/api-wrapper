import { apiClientRequest } from "./index";

export async function healthCheck(url: string, apiKey: string, auth: any, pinataKey: string) {
  const result = await apiClientRequest(url, apiKey, auth, pinataKey)
    .get("/health")
  return result
}
