import { apiClientRequest } from "./index";

export async function specializationCategory(url: string, key: string, auth: any) {
  const result = await apiClientRequest(url, key, auth)
    .get("/specialization-category")
  return result
}

export async function emrCategory(url: string, key: string, auth: any) {
    const result = await apiClientRequest(url, key, auth)
      .get("/emr-category")
    return result
}

export async function serviceCategory(url: string, key: string, auth: any) {
    const result = await apiClientRequest(url, key, auth)
      .get("/service-category")
    return result
}