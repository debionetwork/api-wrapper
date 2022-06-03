import { apiClientRequest } from "./index";

export async function sendMailRegisteredLab(url: string, key: string, auth: any, labId: string) {
  return await apiClientRequest(url, key, auth)
    .post(`/email/registered-lab/${labId}`);
}