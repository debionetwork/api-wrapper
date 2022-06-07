import { debioApiKey, debioTestUrl } from "../config";
import { TransactionHashDto } from '../../../src/models/transaction-hash.dto';
import { getTransactionHash, submitTransactionHash } from '../../../src/endpoint/transaction';

describe('Transaction Controller (e2e)', () => {
  const getData: TransactionHashDto = {
    transaction_hash:
      '0x85a0773882a27912211db04482865b8dfae7d9e31c1cd6d15899ba47b3c30d1e',
    order_id: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
  };

  const postData: TransactionHashDto = {
    transaction_hash:
      '0x85a0773882a27912211db04482865b8dfae7d9e31c1cd6d15899ba47b3c30d1e',
    order_id: '5FjqD9WgAS3DvxuZYNT7LX8jpPca3yfQXMWMtkmvN8kvFaSs',
  };

  it('submitTransactionHash should return', async () => {
    // Act
    const result = await submitTransactionHash(debioTestUrl, debioApiKey, null, postData);

    // Assert
    expect(result.status).toEqual(201);
    expect(result.data).toEqual({ status: 'ok' });
  }, 2500);

  it('getTransactionHash should return', async () => {
    // Act
    const result = await getTransactionHash(debioTestUrl, debioApiKey, null, getData.order_id);

    // Assert
    expect(result.status).toEqual(200);
    expect(result.data).toEqual(getData);
  }, 2500);
});
