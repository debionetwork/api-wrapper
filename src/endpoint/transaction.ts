import { TransactionHashDto } from "../models/transaction-hash.dto";
import { apiClientRequest } from "./index";

export async function submitTransactionHash(url: string, key: string, auth: any, data: TransactionHashDto) {
  return await apiClientRequest(url, key, auth)
    .post("/transaction/hash", data);
}

export async function getTransactionHash(url: string, key: string, auth: any, orderId: string) {
  return await apiClientRequest(url, key, auth)
    .get("/transaction/hash", {
      params: {
        order_id: orderId
      }
    });
}
