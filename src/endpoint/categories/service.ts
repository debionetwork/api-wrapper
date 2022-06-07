import { apiClientRequest } from '../index';

export async function getCategories(url: string, key: string, auth: any) {
  const { data: data } = await apiClientRequest(url, key, auth).get('/service-category');
  return data;
}
