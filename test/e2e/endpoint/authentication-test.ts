import { pinataJwt } from "../../../src/endpoint/authentication"
import { debioApiKey, debioTestUrl } from "../config";

describe('Authentication API integration test', () => {
  it('pinataJwt endpoint should return', async () => {
    const result = await pinataJwt(debioTestUrl, debioApiKey, null);
    expect(result.status).toEqual(200);
  })
})