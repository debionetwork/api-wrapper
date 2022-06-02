export class DataStaking {
  constructor(anyJson: any) {
    this.order_id = anyJson.order_id;
    this.service_category_id = anyJson.service_category_id;
    this.filename = anyJson.filename;
    this.created_at = anyJson.created_at;
    this.updated_at = anyJson.updated_at;
    this.event_processed = anyJson.event_processed
  }

  order_id: string;
  service_category_id: number;
  filename: string;
  created_at: Date;
  updated_at: Date;
  event_processed: boolean
}