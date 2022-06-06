import { apiClientRequest } from './index';

interface LocationParam {
  [key: string]: any;
}

export async function getLocation(url: string, key: string, auth: any, country?, region?, city?) {
  const param: LocationParam = {};
  if (country) {
    param.country_code = country;
  }
  if (country) {
    param.state_code = region;
  }
  if (country) {
    param.city_id = city;
  }
  const result = await apiClientRequest(url, key, auth).get('/location', {
    params: param,
  });
  return result;
}
