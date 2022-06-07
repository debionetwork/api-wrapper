import { debioApiKey, debioTestUrl } from "../config";
import { healthCheck } from "../../../src/endpoint/health";

describe('Health Controller (e2e)', () => {

  it('healthCheck check should return', async () => {
    // Act
    const result = await healthCheck(debioTestUrl, debioApiKey);
    const stringResult = JSON.stringify(result.data);

    // Assert
    // prettier-ignore
    expect(
      stringResult.includes('"database":{"status":"up"}'),
    ).toEqual(true);
    // prettier-ignore
    expect(
      stringResult.includes('"location-database":{"status":"up"}'),
    ).toEqual(true);
    // prettier-ignore
    expect(
      stringResult.includes('"elasticsearch":{"status":"up"}'),
    ).toEqual(true);
    // prettier-ignore
    expect(
      stringResult.includes('"substrate-node":{"status":"up"}'),
    ).toEqual(true);
  }, 30000);
});
