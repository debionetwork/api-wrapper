import { debioApiKey, debioTestUrl } from "../config";
import { getLocation } from "../../../src/endpoint/location" 

describe('Location Storage API integration test', () => {

  it(' endpoint should return list country', async () => {
    const result = await getLocation(debioTestUrl, debioApiKey, null);
    expect(result.status).toEqual(200);
  })
  
  it(' endpoint should return list region', async () => {
    const result = await getLocation(debioTestUrl, debioApiKey, null, 'BF');
    expect(result.status).toEqual(200);
  })

  it(' endpoint should return list region', async () => {
    const result = await getLocation(debioTestUrl, debioApiKey, null, 'BF', 'BAM');
    expect(result.status).toEqual(200);
  })
})