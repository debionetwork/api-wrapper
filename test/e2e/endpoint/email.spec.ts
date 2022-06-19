import { sendMailRegisteredLab } from "../../../src/endpoint/email"
import { debioApiKey, debioTestUrl } from "../config";

describe('Email API integration test', () => {
  it('sendMailRegisteredLab endpoint should return', async () => {
    const result = await sendMailRegisteredLab(debioTestUrl, debioApiKey, null, '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY');
    expect(result.status).toEqual(200);
    expect(result.data).toEqual(
      expect.objectContaining({
        message: 'Sending Email.',
      }),
    );
  })
})