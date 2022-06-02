import { apiClientRequest  } from "../index";

export async function getEMRCategories(url: String, key: String, auth: any) {
  const { data } = await apiClientRequest(url, key, auth)
    .get("/emr-category")  
  return data
}