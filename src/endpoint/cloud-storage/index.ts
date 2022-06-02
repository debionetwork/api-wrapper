import { apiClientRequest } from "../index";

export async function getSignedUrl(url: String, key: String, auth: any, filename: String, action: String) {
  const { data: { signedUrl } } = await apiClientRequest(url, key, auth)
    .get("/gcs/signed-url", {
      params: {
        filename,
        action
      }
    })
  return signedUrl
}
