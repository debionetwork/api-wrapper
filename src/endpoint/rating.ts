import { CreateRatingDto } from "../models/create-rating.dto";
import { apiClientRequest } from "./index";

export async function getByCustomer(url: string, key: string, auth: any, orderId: string) {
  return await apiClientRequest(url, key, auth)
    .get(`/rating/order/${orderId}`);
}

export async function createRatingDto(url: string, key: string, auth: any, data: CreateRatingDto) {
  return await apiClientRequest(url, key, auth)
    .post("/rating", data);
}

export async function getAllService(url: string, key: string, auth: any) {
  return await apiClientRequest(url, key, auth)
    .get("/rating/service");
}

export async function getByServiceId(url: string, key: string, auth: any, serviceId: string) {
  return await apiClientRequest(url, key, auth)
    .get(`/rating/service/${serviceId}`);
}

export async function getLabRating(url: string, key: string, auth: any, labId: string) {
  return await apiClientRequest(url, key, auth)
    .get(`/rating/lab/${labId}`);
}
