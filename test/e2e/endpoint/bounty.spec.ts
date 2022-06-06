import { debioApiKey, debioTestUrl } from "../config";
import { createSyncEvent } from "../../../src/endpoint/bounty";

describe('Data Bounty API integration test', () => {
  const dataBountyMock = {
    order_id: 'ORDER_ID',
    service_category_id: 1,
    filename: 'FILE',
  };
  
  it('createSyncEvent endpoint should return', async () => {
    const dataStakingPromise = await createSyncEvent(debioTestUrl, debioApiKey, null, dataBountyMock);

    expect(dataStakingPromise.data).toHaveProperty("order_id");
    expect(dataStakingPromise.data).toHaveProperty("service_category_id");
    expect(dataStakingPromise.data).toHaveProperty("filename");
  }, 30000);
})