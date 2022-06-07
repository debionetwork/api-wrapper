import { apiClientRequest } from './index';

export async function healthCheck(url: string, apiKey: string) {
  return await apiClientRequest(url, apiKey).get('/health');
}
