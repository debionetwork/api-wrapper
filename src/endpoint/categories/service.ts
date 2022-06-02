import { apiClientRequest  } from "../index";

export async function getCategories(url: String, key: String, auth: any) {
  const { data: data } = await apiClientRequest(url, key, auth)
    .get("/service-category")  
  return data
}