import { debioApiKey, debioTestUrl } from "../config";
import { CreateRatingDto } from '../../../src/models/create-rating.dto';
import { createRating, getAllService, getByCustomer, getByServiceId, getLabRating } from '../../../src/endpoint/rating';

describe('Rating Controller (e2e)', () => {
  const data: CreateRatingDto = {
    lab_id: 'LAB_ID',
    order_id: 'ORDER_ID',
    service_id: 'SERVICE_ID',
    rating: 1,
    rating_by: 'RATING_BY',
    review: 'REVIEW',
  };

  it('createRatingshould return', async () => {
    // Act
    const result = await createRating(debioTestUrl, debioApiKey, null, data);

    // Assert
    expect(result.status).toEqual(201);
    const jsonObject = result.data;
    const dtoEqual: CreateRatingDto = {
      ...jsonObject,
    };
    expect(jsonObject).toEqual(dtoEqual);
  }, 30000);

  it('getByCustomer should return', async () => {
    // Act
    const result = await getByCustomer(debioTestUrl, debioApiKey, null, data.order_id);

    // Assert
    expect(result.status).toEqual(200);
    const jsonObject = result.data;
    const dtoEqual: CreateRatingDto = {
      ...jsonObject,
    };
    expect(jsonObject).toEqual(dtoEqual);
  }, 30000);

  it('getAllService should return', async () => {
    // Act
    const result = await getAllService(debioTestUrl, debioApiKey, null);

    // Assert
    expect(result.status).toEqual(200);
    const jsonObject = result.data;
    expect(jsonObject[0].lab_id).toEqual(data.lab_id);
    expect(jsonObject[0].rating_lab).toEqual(data.rating);
    expect(jsonObject[0].sum_rating_lab).toEqual(1);
    expect(jsonObject[0].count_rating_lab).toEqual(1);
  }, 30000);

  it('getByServiceId should return', async () => {
    // Act
    const result = await getByServiceId(debioTestUrl, debioApiKey, null, data.service_id);

    // Assert
    expect(result.status).toEqual(200);
    const jsonObject = result.data;
    expect(jsonObject.service_id).toEqual(data.service_id);
    expect(jsonObject.sum_rating_service).toEqual(data.rating);
    expect(jsonObject.count_rating_service).toEqual(1);
  }, 30000);

  it('getLabRating should return', async () => {
    // Act
    const result = await getLabRating(debioTestUrl, debioApiKey, null, data.lab_id);

    // Assert
    expect(result.status).toEqual(200);
    const jsonObject = result.data;
    expect(jsonObject.lab_id).toEqual(data.lab_id);
    expect(jsonObject.rating).toEqual(data.rating);
    expect(jsonObject.sum).toEqual(1);
    expect(jsonObject.count).toEqual(1);
  }, 30000);
});
