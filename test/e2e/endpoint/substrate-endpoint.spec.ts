import { debioApiKey, debioTestUrl } from "../config";
import { findByCountryCity, findByCountryCityCategory, getAggregatedByCountries, getBountyByProductNameStatusLabName, getCustomerProvidedService, getOrderByCustomer, getOrderById, getOrderByLab, getServiceRequestByCustomer, walletBinding } from '../../../src/endpoint/substrate-endpoint';
import { WalletBindingDTO } from "../../../src/models/wallet-binding.dto";

describe('Substrate Endpoint Controller (e2e)', () => {
  it('findByCountryCityCategory should return', async () => {
    // Arrange
    const COUNTRY = 'ID';
    const REGION = 'BA';
    const CITY = 'Denpasar';
    const CATEGORY = 'Single Gene';
    const SERVICE_FLOW = 'RequestTest';

    // Act
    const result = await findByCountryCityCategory(debioTestUrl, debioApiKey, null, COUNTRY, REGION, CITY, CATEGORY, SERVICE_FLOW, 1, 1);

    // Assert
    expect(JSON.stringify(result.data).includes(COUNTRY)).toBeTruthy();
    expect(JSON.stringify(result.data).includes(REGION)).toBeTruthy();
    expect(JSON.stringify(result.data).includes(CITY)).toBeTruthy();
    expect(JSON.stringify(result.data).includes(CATEGORY)).toBeTruthy();
    expect(JSON.stringify(result.data).includes(SERVICE_FLOW)).toBeTruthy();
    expect(result.status).toEqual(200);
  }, 30000);

  it('findByCountryCity should return', async () => {
    // Arrange
    const COUNTRY = 'ID';
    const CITY = 'Denpasar';

    // Act
    const result = await findByCountryCity(debioTestUrl, debioApiKey, null, COUNTRY, CITY);

    // Assert
    expect(JSON.stringify(result.data).includes(COUNTRY)).toBeTruthy();
    expect(JSON.stringify(result.data).includes(CITY)).toBeTruthy();
    expect(result.status).toEqual(200);
  }, 30000);

  it('getAggregatedByCountries should return', async () => {
    // Arrange
    const COUNTRY = 'ID';
    const CITY = 'Kota Administrasi Jakarta Barat';

    // Act
    const result = await getAggregatedByCountries(debioTestUrl, debioApiKey, null, 1, 1);

    // Assert
    expect(JSON.stringify(result.data).includes(COUNTRY)).toBeTruthy();
    expect(JSON.stringify(result.data).includes(CITY)).toBeTruthy();
    expect(result.status).toEqual(200);
  }, 30000);

  it('walletBinding should return', async () => {
    // Arrange
    const ACCOUNT_ID = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
    const ETH_ADDRESS =
      '0xf5b6b9e7b3eb3dcd5b70df779fe3ef28ca4332c73d3fcbe9d6021863996bea75';
    const data: WalletBindingDTO = {
      accountId: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
      ethAddress:
        '0xf5b6b9e7b3eb3dcd5b70df779fe3ef28ca4332c73d3fcbe9d6021863996bea75',
    };

    // Act
    const result = await walletBinding(debioTestUrl, debioApiKey, null, data);

    // Assert
    expect(JSON.stringify(result.data).includes(ACCOUNT_ID)).toBeTruthy();
    expect(JSON.stringify(result.data).includes(ETH_ADDRESS)).toBeTruthy();
    expect(result.status).toEqual(200);
  }, 30000);

  it('getOrderById should return', async () => {
    // Arrange
    const HASH_ID =
      '0xf310b59907c98e384a8528b324a0bd96b4e7361c7dfd943e40d3c7156632cf2c';

    // Act
    const result = await getOrderById(debioTestUrl, debioApiKey, null, HASH_ID);

    // Assert
    expect(JSON.stringify(result.data).includes(HASH_ID)).toBeTruthy();
    expect(result.status).toEqual(200);
  }, 30000);

  it('getOrderByCustomer should return', async () => {
    // Arrange
    const CUSTOMER_ID = '5Da5aHSoy3Bxb7Kxo4HuPLY7kE9FKxEg93dVhCKeXJ5JGY25';

    // Act
    const result = await getOrderByCustomer(debioTestUrl, debioApiKey, null, CUSTOMER_ID, '', 1, 1);

    // Assert
    expect(JSON.stringify(result.data).includes(CUSTOMER_ID)).toBeTruthy();
    expect(result.status).toEqual(200);
  }, 30000);

  it('getBountyByProductNameStatusLabName should return', async () => {
    // Arrange
    const CUSTOMER_ID = '5Da5aHSoy3Bxb7Kxo4HuPLY7kE9FKxEg93dVhCKeXJ5JGY25';

    // Act
    const result = await getBountyByProductNameStatusLabName(debioTestUrl, debioApiKey, null, CUSTOMER_ID, '', 1, 1);

    // Assert
    expect(JSON.stringify(result.data).includes(CUSTOMER_ID)).toBeTruthy();
    expect(result.status).toEqual(200);
  });

  it('getOrderByLab should return', async () => {
    // Arrange
    const LAB_ID = '5Hj284yPGCrxjh7CHw5o1CFJXKf1DYfgbYk6CPrm1pPyCiYM';

    // Act
    const result = await getOrderByLab(debioTestUrl, debioApiKey, null, LAB_ID, '', 1, 1);

    // Assert
    expect(JSON.stringify(result.data).includes(LAB_ID)).toBeTruthy();
    expect(result.status).toEqual(200);
  }, 30000);

  it('getServiceRequestByCustomer should return', async () => {
    // Arrange
    const CUSTOMER_ID = '5GH6Kqaz3ZewWvDCZPkTnsRezUf2Q7zZ5GmC4XFLNqKdVwA7';

    // Act
    const result = await getServiceRequestByCustomer(debioTestUrl, debioApiKey, null, CUSTOMER_ID, 1, 1);

    // Assert
    expect(JSON.stringify(result.data).includes(CUSTOMER_ID)).toBeTruthy();
    expect(result.status).toEqual(200);
  }, 15000);

  it('getCustomerProvidedService should return', async () => {
    // Arrange
    const COUNTRY_CODE = 'ID';
    const REGION_CODE = 'JK';
    const CITY = 'Kota Administrasi Jakarta Barat';
    const CATEGORY = 'SNP Microarray';

    // Act
    const result = await getCustomerProvidedService(debioTestUrl, debioApiKey, null, COUNTRY_CODE, REGION_CODE, CITY, CATEGORY);

    // Assert
    expect(JSON.stringify(result.data).includes(COUNTRY_CODE)).toBeTruthy();
    expect(JSON.stringify(result.data).includes(REGION_CODE)).toBeTruthy();
    expect(JSON.stringify(result.data).includes(CITY)).toBeTruthy();
    expect(JSON.stringify(result.data).includes(CATEGORY)).toBeTruthy();
    expect(result.status).toEqual(200);
  }, 15000);
});
