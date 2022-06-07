import { getSignedUrl } from "../../../src/endpoint/cloud-storage"
import { debioApiKey, debioTestUrl } from "../config";

describe('Cloud Storage API integration test', () => {
  const FILENAME = 'example.txt';
  const ACTION = 'write';

  it('getSignedUrl endpoint should return', async () => {
    const result = await getSignedUrl(debioTestUrl, debioApiKey, null, FILENAME, ACTION);
    expect(result).toContain("storage.googleapis.com");
  })
})