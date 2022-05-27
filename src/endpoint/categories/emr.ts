import { apiClientRequest  } from "../index";

export async function getEMRCategories(url: String, key: String, auth: Object) {
  const { data } = await apiClientRequest(url, key, auth)
    .get("/emr-category")  
  return data
}