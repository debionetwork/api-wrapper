import { GeneticAnalysisOrderPaidDto } from '../models/genetic-analysis-order-paid.dto';
import { WalletBindingDTO } from '../models/wallet-binding.dto';
import { apiClientRequest } from './index';

export async function findByCountryCityCategory(
  url: string,
  key: string,
  auth: any,
  country: string,
  region: string,
  city: string,
  category: string,
  serviceFlow: string,
  page: number,
  size: number,
) {
  return await apiClientRequest(url, key, auth).get('/substrate/labs', {
    params: {
      country,
      region,
      city,
      category,
      service_flow: serviceFlow,
      page,
      size,
    },
  });
}

export async function findByCountryCity(url: string, key: string, auth: any, country: string, city: string) {
  return await apiClientRequest(url, key, auth).get(`/substrate/services/${country}/${city}`);
}

export async function getOrderById(url: string, key: string, auth: any, hashId: string) {
  return await apiClientRequest(url, key, auth).get(`/substrate/orders/${hashId}`);
}

export async function getOrderGa(url: string, key: string, auth: any, hashId: string) {
  return await apiClientRequest(url, key, auth).get(`/substrate/orders/ga/${hashId}`);
}

export async function getOrderByCustomer(
  url: string,
  key: string,
  auth: any,
  customerId: string,
  keyword: string,
  page: number,
  size: number,
) {
  return await apiClientRequest(url, key, auth).get(`/substrate/orders/list/${customerId}`, {
    params: {
      keyword,
      page,
      size,
    },
  });
}

export async function getBountyByProductNameStatusLabName(
  url: string,
  key: string,
  auth: any,
  customerId: string,
  keyword: string,
  page: number,
  size: number,
) {
  return await apiClientRequest(url, key, auth).get(`/substrate/orders/bounty_list/${customerId}`, {
    params: {
      keyword,
      page,
      size,
    },
  });
}

export async function getOrderByLab(
  url: string,
  key: string,
  auth: any,
  labId: string,
  keyword: string,
  page: number,
  size: number,
) {
  return await apiClientRequest(url, key, auth).get(`/substrate/orders/list/lab/${labId}`, {
    params: {
      keyword,
      page,
      size,
    },
  });
}

export async function getAggregatedByCountries(url: string, key: string, auth: any, page: number, size: number) {
  return await apiClientRequest(url, key, auth).get(`/substrate/countries`, {
    params: {
      page,
      size,
    },
  });
}

export async function getServiceRequestByCustomer(
  url: string,
  key: string,
  auth: any,
  customerId: string,
  page: number,
  size: number,
) {
  return await apiClientRequest(url, key, auth).get(`/substrate/service-request/${customerId}`, {
    params: {
      page,
      size,
    },
  });
}

export async function getCustomerProvidedService(
  url: string,
  key: string,
  auth: any,
  countryCode: string,
  regionCode: string,
  city: string,
  category: string,
) {
  return await apiClientRequest(url, key, auth).get(`/substrate/provideRequestService`, {
    params: {
      countryCode,
      regionCode,
      city,
      category,
    },
  });
}

export async function getGeneticAnalysisByTrackingId(url: string, key: string, auth: any, trackingId: string) {
  return await apiClientRequest(url, key, auth).get(`/substrate/genetic-analysis/${trackingId}`);
}

export async function getGeneticAnalysisOrderByAnalyst(
  url: string,
  key: string,
  auth: any,
  analystId: string,
  keyword: string,
  page: number,
  size: number,
) {
  return await apiClientRequest(url, key, auth).get(`/genetic-analysis-order/list/analyst/${analystId}`, {
    params: {
      keyword,
      page,
      size,
    },
  });
}

export async function getGeneticAnalysisOrderByCustomer(
  url: string,
  key: string,
  auth: any,
  customerId: string,
  keyword: string,
  page: number,
  size: number,
) {
  return await apiClientRequest(url, key, auth).get(`/genetic-analysis-order/list/customer/${customerId}`, {
    params: {
      keyword,
      page,
      size,
    },
  });
}

export async function walletBinding(url: string, key: string, auth: any, data: WalletBindingDTO) {
  return await apiClientRequest(url, key, auth).post('/wallet-binding', data);
}

export async function geneticAnalysisOrderPaid(url: string, key: string, auth: any, data: GeneticAnalysisOrderPaidDto) {
  return await apiClientRequest(url, key, auth).post('/geneticAnalysisOrderPaid', data);
}
