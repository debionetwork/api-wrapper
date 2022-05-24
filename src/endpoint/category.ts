import { apiClientRequest } from "./index";

export async function specializationCategory(url: String, key: String, auth: Object) {
  const result = await apiClientRequest(url, key, auth)
    .get("/specialization-category")
  return result
}

export async function emrCategory(url: String, key: String, auth: Object) {
    const result = await apiClientRequest(url, key, auth)
      .get("/emr-category")
    return result
}

export async function serviceCategory(url: String, key: String, auth: Object) {
    const result = await apiClientRequest(url, key, auth)
      .get("/service-category")
    return result
}