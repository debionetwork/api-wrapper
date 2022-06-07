import { apiClientRequest } from './index';

export async function getSignedUrl(url: string, key: string, auth: any, filename: string, action: string) {
  const {
    data: { signedUrl },
  } = await apiClientRequest(url, key, auth).get('/gcs/signed-url', {
    params: {
      filename,
      action,
    },
  });
  return signedUrl;
}
