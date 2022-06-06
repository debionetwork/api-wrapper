import { apiClientRequest } from '../index';
import { DataBountyInfo } from '../../models/bounty/data-bounty-info';

export async function createSyncEvent(url: string, key: string, auth: any, data: DataBountyInfo) {
  return await apiClientRequest(url, key, auth).post('/bounty/create-sync-event', data);
}
