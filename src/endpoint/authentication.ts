import { apiClientRequest } from './index';

export async function pinataJwt(url: string, key: string, auth: any) {
  return await apiClientRequest(url, key, auth).get('/auth/pinata-jwt');
}
