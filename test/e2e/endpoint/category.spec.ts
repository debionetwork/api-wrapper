import { debioApiKey, debioTestUrl } from "../config";
import { specializationCategory, emrCategory, serviceCategory } from "../../../src/endpoint/category" 

describe('Specialization Category Storage API integration test', () => {

  it(' endpoint should return', async () => {
    const result = await specializationCategory(debioTestUrl, debioApiKey, null);
    expect(result.status).toEqual(200);
    expect(result.data).toEqual({ status: 'ok' });
  })
})

describe('EMR Category Storage API integration test', () => {


  it(' endpoint should return', async () => {
    const result = await emrCategory(debioTestUrl, debioApiKey, null);
    expect(result.status).toEqual(200);
    expect(result.data).toEqual({ status: 'ok' });
    expect(result[0]).toContain({ "id": 1 });
  })
})

describe('Service Category Storage API integration test', () => {


  it(' endpoint should return', async () => {
    const result = await serviceCategory(debioTestUrl, debioApiKey, null);
    expect(result.status).toEqual(200);
    expect(result.data).toEqual({ status: 'ok' });
    expect(result[0]).toContain({ "id": 1 });
  })
})