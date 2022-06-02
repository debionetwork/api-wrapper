import { apiClientRequest  } from "../index";

export async function getEMRCategories(url: string, key: string, auth: any) {
  const { data } = await apiClientRequest(url, key, auth)
    .get("/emr-category")  
  return data
}